import { PartialType } from '@nestjs/mapped-types';
import { CreateProprietarioDto } from './create-proprietario.dto';
import { IsString } from 'class-validator';

export class UpdateProprietarioDto extends PartialType(CreateProprietarioDto) {
    @IsString()
    colaboradorId :string
}

