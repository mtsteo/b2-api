import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProprietarioService } from './proprietario.service';
import { CreateProprietarioDto } from './dto/create-proprietario.dto';
import { UpdateProprietarioDto } from './dto/update-proprietario.dto';
import { JwtGuard } from 'src/auth/guard';
import { GetUserId } from 'src/auth/decorator';

@Controller('proprietario')
export class ProprietarioController {
  constructor(private readonly ProprietarioService: ProprietarioService) {}

  @Post()
  create(@Body() createProprietarioDto: CreateProprietarioDto) {
    return this.ProprietarioService.create(createProprietarioDto);
  }

  @Get()
  findAll() {
    return this.ProprietarioService.findAll();
  }

  @UseGuards(JwtGuard)
  @Get('perfil')
  ProfileData(@GetUserId() id: string) {
    return this.ProprietarioService.ProfileData(id);
  }

  @Get('busca/:id')
  findOne(@Param('id') id: string) {
    return this.ProprietarioService.findOne(id);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProprietarioDto: UpdateProprietarioDto) {
    return this.ProprietarioService.update(id, updateProprietarioDto);
  }

  @UseGuards(JwtGuard)
  @Patch('colaborador/:id')
  updateColaborador(@Param('id') id: string, @Body() updateProprietarioDto: UpdateProprietarioDto) {
    return this.ProprietarioService.updateColaborador(id, updateProprietarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ProprietarioService.remove(+id);
  }
}

