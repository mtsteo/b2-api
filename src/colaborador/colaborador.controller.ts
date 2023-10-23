import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ColaboradorService } from './colaborador.service';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';
import { UpdateColaboradorDto } from './dto/update-colaborador.dto';
import { GetUserId } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';

@Controller('colaborador')
export class ColaboradorController {
  constructor(private readonly colaboradorService: ColaboradorService) {}

  @UseGuards(JwtGuard)
  @Post()
  create(@Body() createColaboradorDto: CreateColaboradorDto) {
    console.log(createColaboradorDto)
    return this.colaboradorService.create(createColaboradorDto);
  }

  @Get()
  findAll() {
    return this.colaboradorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.colaboradorService.findOne(+id);
  }

  @Patch()
  update(@GetUserId() id:  string, @Body() updateColaboradorDto: UpdateColaboradorDto) {
    return this.colaboradorService.update(id, updateColaboradorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.colaboradorService.remove(+id);
  }
}
