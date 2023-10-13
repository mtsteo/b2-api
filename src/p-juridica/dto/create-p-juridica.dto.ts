import { IsEmail, IsNotEmpty, IsString } from "class-validator"


export class CreatePJuridicaDto {
    @IsNotEmpty()
    @IsEmail()
    email : string
    @IsNotEmpty()
    password: string
    @IsNotEmpty()
    @IsString()
    cpf : string
    @IsString()
    @IsNotEmpty()
    nome :string
    @IsString()
    @IsNotEmpty()
    sobrenome: string
    
}
