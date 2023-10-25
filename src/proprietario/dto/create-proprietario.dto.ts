import { IsEmail, IsNotEmpty, IsString } from "class-validator"


export class CreateProprietarioDto {
    id : string
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

export class CreateEnderecoDto{
    @IsNotEmpty()
    cep : string
    @IsNotEmpty()
    uf : string
    @IsNotEmpty()
    @IsString()
    cidade : string
    @IsString()
    @IsNotEmpty()
    bairro: string
    @IsNotEmpty()
    @IsString()
    logradouro: string
    @IsString()
    num: string
    @IsString()
    refer : string
}
