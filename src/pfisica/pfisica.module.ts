import { Module } from '@nestjs/common';
import { PfisicaService } from './pfisica.service';
import { PfisicaController } from './pfisica.controller';

@Module({
  controllers: [PfisicaController],
  providers: [PfisicaService],
})
export class PfisicaModule {}
