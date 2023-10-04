import { Module } from '@nestjs/common';
import { PJuridicaService } from './p-juridica.service';
import { PJuridicaController } from './p-juridica.controller';

@Module({
  controllers: [PJuridicaController],
  providers: [PJuridicaService],
})
export class PJuridicaModule {}
