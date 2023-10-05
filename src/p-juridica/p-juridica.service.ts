import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreatePJuridicaDto } from './dto/create-p-juridica.dto';
import { UpdatePJuridicaDto } from './dto/update-p-juridica.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argo from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class PJuridicaService {
  constructor(private prisma: PrismaService) {}
  async create(createPJuridicaDto: CreatePJuridicaDto) {
    const phash = await argo.hash(createPJuridicaDto.password);
    try {
      await this.prisma.user.create({
        data: {
          email: createPJuridicaDto.email,
          password: phash,
          cpnj: createPJuridicaDto.cnpj,
        },
      });
      return 'User created';
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') throw new ForbiddenException('Email já cadastrado!');
      }
      return error;
    }
  }

  findAll() {
    return `This action returns all pJuridica`;
  }
  async findOne(id: number) {
    try {
      const userData = await this.prisma.user.findFirst({
        where: {
          id: id,
        },
        include: {
          produto: true,
        },
      });
      delete userData.password
      return userData;
    } catch (error) {}
    return `This action returns a #${id} pJuridica`;
  }

  update(id: number, updatePJuridicaDto: UpdatePJuridicaDto) {
    return `This action updates a #${id} pJuridica`;
  }

  remove(id: number) {
    return `This action removes a #${id} pJuridica`;
  }
}
