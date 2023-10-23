import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateProprietarioDto } from './dto/create-proprietario.dto';
import { UpdateProprietarioDto } from './dto/update-proprietario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { randomUUID } from 'crypto';
import * as argo from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class ProprietarioService {
  constructor(private prisma: PrismaService) {}

  async create(createProprietarioDto: CreateProprietarioDto) {
    const phash = await argo.hash(createProprietarioDto.password);
    try {
      await this.prisma.proprietario.create({
        data: {
          id: randomUUID(),
          email: createProprietarioDto.email,
          senha: phash,
          cpf: createProprietarioDto.cpf,
          nome: createProprietarioDto.nome,
          sobrenome: createProprietarioDto.sobrenome,
        },
      });
      return 'User created';
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002')
          throw new ForbiddenException({ message: 'Usuário já cadastrado' });
      }
      return error;
    }
  }

  findAll() {
    return `This action returns all pJuridica`;
  }

  async ProfileData(id: string) {
    const userData = await this.prisma.proprietario.findFirst({
      where: {
        id: id,
      },
      include: {
        empresa: true,
        
      },
    });
    if (userData) {
      delete userData.senha;
      return userData;
    }
    throw new ForbiddenException({ error: 'usuário não entrado!' });
  }
  async findOne(id: string) {
    const userData = await this.prisma.proprietario.findFirst({
      where: {
        id: id,
      },
      include: {
        // produto: true,
      },
    });
    if (userData) {
      delete userData.senha;
      return userData;
    }
    throw new ForbiddenException({ error: 'usuário não entrado!' });
  }

  async update(id: string, updatePJuridicaDto: UpdateProprietarioDto) {
    console.log(updatePJuridicaDto,id)
    try {
      await this.prisma.proprietario.update({
        where: {
          id: id,
        },
        data: {
          ...updatePJuridicaDto,
        },
      });
      return `This action updates a #${id} pJuridica`;
    } catch (error) {}
  }
  async updateColaborador(id: string, updatePJuridicaDto: UpdateProprietarioDto) {
    try {
      await this.prisma.proprietario.update({
        where: {
          id: id,
        },
        data: {
  
        
        },
      });
      return `This action updates a #${id} pJuridica`;
    } catch (error) {}
  }

  remove(id: number) {
    return `This action removes a #${id} pJuridica`;
  }
}
