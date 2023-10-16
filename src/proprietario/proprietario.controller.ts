import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProprietarioService } from './proprietario.service';
import { CreateProprietarioDto } from './dto/create-proprietario.dto';
import { UpdateProprietarioDto } from './dto/update-proprietario.dto';
import { JwtGuard } from 'src/auth/guard';

@Controller('proprietario')
export class ProprietarioController {
  constructor(private readonly pJuridicaService: ProprietarioService) {}

  @Post()
  create(@Body() createPJuridicaDto: CreateProprietarioDto) {
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
  update(@Param('id') id: string, @Body() updatePJuridicaDto: UpdateProprietarioDto) {
    return this.pJuridicaService.update(id, updatePJuridicaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pJuridicaService.remove(+id);
  }
}

