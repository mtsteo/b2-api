import { Module } from '@nestjs/common';
import { NegociacaoController } from './negociacao.controller';
import { NegociacaoService } from './negociacao.service';

@Module({
  controllers: [NegociacaoController],
  providers: [NegociacaoService]
})
export class NegociacaoModule {}
