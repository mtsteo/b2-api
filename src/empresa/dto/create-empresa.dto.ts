import { IsNotEmpty, IsString } from "class-validator"

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
