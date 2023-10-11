import { Controller, Get, Param } from '@nestjs/common';
import { ReceitawsService } from './receitaws.service';
import { CreateReceitawDto } from './dto/create-receitaw.dto';

@Controller('receitaws')
export class ReceitawsController {
  constructor(private readonly receitawsService: ReceitawsService) {}

  @Get('/:cnpj')
  findOne(@Param("cnpj") cnpj: CreateReceitawDto) {
    console.log(typeof cnpj);
    return this.receitawsService.findOne(cnpj);
  }
}
