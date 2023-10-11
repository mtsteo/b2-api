import { Module } from '@nestjs/common';
import { ReceitawsService } from './receitaws.service';
import { ReceitawsController } from './receitaws.controller';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({
  imports:[HttpModule],
  controllers: [ReceitawsController],
  providers: [ReceitawsService],
})
export class ReceitawsModule {}
