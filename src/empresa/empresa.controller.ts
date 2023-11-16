import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { CreateEmpresaDto, CreateEnderecoDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { JwtGuard } from 'src/auth/guard';
import { GetUserId } from 'src/auth/decorator';

@Controller('empresa')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @UseGuards(JwtGuard)
  @Post()
  create(@GetUserId() userId: string, @Body() createEmpresaDto: CreateEmpresaDto) {
    return this.empresaService.create(userId, createEmpresaDto);
  }

  
  @UseGuards(JwtGuard)
  @Get()
  findAllEmpresas(@GetUserId() userId : string) {
    console.log(userId)
    return this.empresaService.findAllEmpresa(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empresaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpresaDto: UpdateEmpresaDto) {
    return this.empresaService.update(+id, updateEmpresaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empresaService.remove(+id);
  }

  @UseGuards(JwtGuard)
  @Post('endereco')
  createEndereco(@Body() CreateEnderecoDto: CreateEnderecoDto) {
    console.log(CreateEnderecoDto)
    return this.empresaService.createEndereco(CreateEnderecoDto);
  }
}
