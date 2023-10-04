import { PartialType } from '@nestjs/mapped-types';
import { CreatePJuridicaDto } from './create-p-juridica.dto';

export class UpdatePJuridicaDto extends PartialType(CreatePJuridicaDto) {}
