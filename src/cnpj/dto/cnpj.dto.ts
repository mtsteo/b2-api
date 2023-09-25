import { IsNotEmpty, IsString } from "class-validator";

export class CnpjDto{
    @IsString()
    @IsNotEmpty()
    cnpj : string
}