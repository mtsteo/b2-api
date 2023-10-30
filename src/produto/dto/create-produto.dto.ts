import { IsNotEmpty, IsString } from "class-validator"

export class CreateProdutoDto {
    @IsString()
    @IsNotEmpty()
    nome: string
    @IsString()
    @IsNotEmpty()
    descricao: string
    @IsString()
    categoriaId : string
    @IsString()
    @IsNotEmpty()
    ncm : string
    @IsNotEmpty()
    @IsString()
    empresaId : string
}
