import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PfisicaService } from './pfisica.service';
import { CreatePfisicaDto } from './dto/create-pfisica.dto';
import { UpdatePfisicaDto } from './dto/update-pfisica.dto';

@Controller('pfisica')
export class PfisicaController {
  constructor(private readonly pfisicaService: PfisicaService) {}

  @Post()
  create(@Body() createPfisicaDto: CreatePfisicaDto) {
    return this.pfisicaService.create(createPfisicaDto);
  }

  @Get()
  findAll() {
    return this.pfisicaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pfisicaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePfisicaDto: UpdatePfisicaDto) {
    return this.pfisicaService.update(+id, updatePfisicaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pfisicaService.remove(+id);
  }
}
