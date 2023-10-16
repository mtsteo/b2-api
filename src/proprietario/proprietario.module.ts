import { Module } from '@nestjs/common';
import { ProprietarioService } from './proprietario.service';
import { ProprietarioController } from './proprietario.controller';

@Module({
  controllers: [ProprietarioController],
  providers: [ProprietarioService],
})
export class ProprietarioModule {}
