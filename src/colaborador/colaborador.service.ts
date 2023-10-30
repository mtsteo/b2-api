import { Injectable } from '@nestjs/common';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';
import { UpdateColaboradorDto } from './dto/update-colaborador.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ColaboradorService {
  constructor(private prisma: PrismaService) {}
  async create(createColaboradorDto: CreateColaboradorDto) {
    try {
      await this.prisma.empresaColaborador.create({
        data: {
          colaboradorId: createColaboradorDto.colaboradorId,
          empresaId: createColaboradorDto.empresaId.toString(),
          admin: createColaboradorDto.admin,
        },
      });
      return 'Ok';
    } catch (error) {
      return error
    }
  }

  findAll() {
    return `This action returns all colaborador`;
  }

  findOne(id: number) {
    return `This action returns a #${id} colaborador`;
  }

  update(id: string, updateColaboradorDto: UpdateColaboradorDto) {
    return `This action updates a #${id} colaborador`;
  }

  remove(id: number) {
    return `This action removes a #${id} colaborador`;
  }
}
