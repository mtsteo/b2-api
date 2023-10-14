import { Injectable } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { randomUUID } from 'crypto';

@Injectable()
export class EmpresaService {
  constructor(private prisma: PrismaService){}
  
  async create(userId : string, createEmpresaDto: CreateEmpresaDto) {
    try {
      await this.prisma.empresa.create({
        data:{
          id : randomUUID(),
          cnpj : createEmpresaDto.cnpj,
          razao_socia : createEmpresaDto.razao_social,
          nome_fantasia : createEmpresaDto.nome_fantasia,
          proprietarioId : userId,
        }
      })
    } catch (error) {
      
    }
    return 'This action adds a new empresa';
  }

  findAll() {
    return `This action returns all empresa`;
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
}
