import { Body, Controller, Post } from '@nestjs/common';
import { CnpjService } from './cnpj.service';
import { CnpjDto } from './dto';

@Controller('cnpj')
export class CnpjController {
    constructor(private cnpjApi : CnpjService){}
    
    @Post('consulta')
    consulta(@Body() dto : CnpjDto){
        this.cnpjApi.getCnpjData(dto)
    }
}