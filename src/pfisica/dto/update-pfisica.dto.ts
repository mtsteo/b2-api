import { PartialType } from '@nestjs/mapped-types';
import { CreatePfisicaDto } from './create-pfisica.dto';

export class UpdatePfisicaDto extends PartialType(CreatePfisicaDto) {}
