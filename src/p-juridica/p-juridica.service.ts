import { Injectable } from '@nestjs/common';
import { CreatePJuridicaDto } from './dto/create-p-juridica.dto';
import { UpdatePJuridicaDto } from './dto/update-p-juridica.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argo from 'argon2';

@Injectable()
export class PJuridicaService {
  constructor(
    private prisma: PrismaService,
  ) {}
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
      return error;
    }
  }

  findAll() {
    return `This action returns all pJuridica`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pJuridica`;
  }

  update(id: number, updatePJuridicaDto: UpdatePJuridicaDto) {
    return `This action updates a #${id} pJuridica`;
  }

  remove(id: number) {
    return `This action removes a #${id} pJuridica`;
  }
}
