import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtGuard } from 'src/auth/guard';

@Controller('produto')
export class ProdutoController {


    @UseGuards(JwtGuard)
    @Get()
    getProduto(@Req() req : Request) {
        return  req.user
    }
}
