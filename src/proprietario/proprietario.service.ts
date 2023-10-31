import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEnderecoDto, CreateProprietarioDto } from './dto/create-proprietario.dto';
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
    throw new NotFoundException({ error: 'usuário não encontrado!' });
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
    throw new NotFoundException({ error: 'usuário não entrado!' });
  }

  async update(id: string, updatePJuridicaDto: UpdateProprietarioDto) {
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
        data: {},
      });
      return `This action updates a #${id} pJuridica`;
    } catch (error) {}
  }

  createEndereco(userId: string, CreateEnderecoDto: CreateEnderecoDto) {
    try {
    } catch (error) {}
  }
}
