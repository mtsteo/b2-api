import { Injectable } from '@nestjs/common';
import { CreatePfisicaDto } from './dto/create-pfisica.dto';
import { UpdatePfisicaDto } from './dto/update-pfisica.dto';

@Injectable()
export class PfisicaService {
  create(createPfisicaDto: CreatePfisicaDto) {
    return 'This action adds a new pfisica';
  }

  findAll() {
    return `This action returns all pfisica`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pfisica`;
  }

  update(id: number, updatePfisicaDto: UpdatePfisicaDto) {
    return `This action updates a #${id} pfisica`;
  }

  remove(id: number) {
    return `This action removes a #${id} pfisica`;
  }
}
