import { IsNotEmpty, IsString, Max } from "class-validator"

export class CreateEmpresaDto {
    id: string
    @IsNotEmpty()
    @IsNotEmpty()
    cnpj : string
    @IsNotEmpty()
    @IsNotEmpty()
    nome_fantasia: string
    @IsNotEmpty()
    @IsNotEmpty()
    razao_social : string
}

export class CreateEnderecoDto{
    @IsNotEmpty()
    cep : string
    @IsNotEmpty()
    estado : string
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
    @IsNotEmpty()
    @IsString()
    empresaId : string
}
