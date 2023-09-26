import { Body, Controller, Get, Post } from '@nestjs/common';
import { CnpjService } from './cnpj.service';
import { CnpjDto } from './dto';

@Controller('cnpj')
export class CnpjController {
    constructor(private cnpjApi : CnpjService){}
    
    @Get('consulta')
    consulta(@Body() dto : CnpjDto){
         return this.cnpjApi.getCnpjData(dto)
    }
}