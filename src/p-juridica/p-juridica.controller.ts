import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PJuridicaService } from './p-juridica.service';
import { CreatePJuridicaDto } from './dto/create-p-juridica.dto';
import { UpdatePJuridicaDto } from './dto/update-p-juridica.dto';

@Controller('p-juridica')
export class PJuridicaController {
  constructor(private readonly pJuridicaService: PJuridicaService) {}

  @Post()
  create(@Body() createPJuridicaDto: CreatePJuridicaDto) {
    return this.pJuridicaService.create(createPJuridicaDto);
  }

  @Get()
  findAll() {
    return this.pJuridicaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pJuridicaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePJuridicaDto: UpdatePJuridicaDto) {
    return this.pJuridicaService.update(+id, updatePJuridicaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pJuridicaService.remove(+id);
  }
}
