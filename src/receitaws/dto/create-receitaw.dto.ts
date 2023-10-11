import { ForbiddenException } from '@nestjs/common';
import { Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateReceitawDto {
  public cpnj: string;
}
