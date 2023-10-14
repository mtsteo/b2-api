import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PJuridicaService } from './p-juridica.service';
import { CreatePJuridicaDto } from './dto/create-p-juridica.dto';
import { UpdatePJuridicaDto } from './dto/update-p-juridica.dto';
import { JwtGuard } from 'src/auth/guard';

@Controller('pjuridica')
export class PJuridicaController {
  constructor(private readonly pJuridicaService: PJuridicaService) {}

  @Post('/cadastro')
  create(@Body() createPJuridicaDto: CreatePJuridicaDto) {
    return this.pJuridicaService.create(createPJuridicaDto);
  }

  @Get()
  findAll() {
    return this.pJuridicaService.findAll();
  }

  @Get('busca/:id')
  findOne(@Param('id') id: string) {
    return this.pJuridicaService.findOne(id);
  }

  // @UseGuards(JwtGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePJuridicaDto: UpdatePJuridicaDto) {
    return this.pJuridicaService.update(id, updatePJuridicaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pJuridicaService.remove(+id);
  }
}

