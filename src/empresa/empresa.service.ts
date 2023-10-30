import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateEmpresaDto, CreateEnderecoDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { randomUUID } from 'crypto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class EmpresaService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, createEmpresaDto: CreateEmpresaDto) {
    try {
      await this.prisma.empresa.create({
        data: {
          id: randomUUID(),
          cnpj: createEmpresaDto.cnpj,
          razao_social: createEmpresaDto.razao_social,
          nome_fantasia: createEmpresaDto.nome_fantasia,
          proprietarioId: userId,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002')
          throw new ForbiddenException('Empresa já se encontra cadastrada!');
      }
    }
    return 'This action adds a new empresa';
  }

  async findAllEmpresa(userId: string) {
    try {
      const dataEmpresas = await this.prisma.empresa.findMany({
        where: {
          proprietarioId: userId,
        },
      });

      const colabs = await this.prisma.empresaColaborador.findMany({
        where: {
          colaboradorId: userId,
        },
        select:{
          empresa :true
        }
      });

      return { Empresas: dataEmpresas, colab: colabs };
    } catch (error) {
      return error
    }
    
  }

  findOne(id: number) {
    return `This action returns a #${id} empresa`;
  }

  update(id: number, updateEmpresaDto: UpdateEmpresaDto) {
    return `This action updates a #${id} empresa`;
  }

  remove(id: number) {
    return `This action removes a #${id} empresa`;
  }

  async createEndereco(CreateEnderecoDto: CreateEnderecoDto) {
    try {
      await this.prisma.endereco.create({
        data: {
          bairro: CreateEnderecoDto.bairro,
          cep: CreateEnderecoDto.cep,
          rua: CreateEnderecoDto.logradouro,
          uf: CreateEnderecoDto.uf,
          num: CreateEnderecoDto.num,
          refer: CreateEnderecoDto.refer,
          Empresa: {
            connect: { id: CreateEnderecoDto.empresaId },
          },
          cidade :{
            create:{
              nome : CreateEnderecoDto.cidade
            }
          }
        },
      });
      return 'ok';
    } catch (error) {
      return error;
    }
  }
}
