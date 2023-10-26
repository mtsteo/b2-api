import { IsNotEmpty, IsString, Max } from "class-validator"

export class CreateEmpresaDto {
    id: string
    @IsNotEmpty()
    @IsNotEmpty()
    @Max(14, {message:"CNPJ deve ter no máximo 14 caracteres!"})
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
    @Max(8,{message: "O CEP deve ter no máximo 8 caracteres!"})
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
    @IsNotEmpty()
    @IsString()
    empresaId : string
}
