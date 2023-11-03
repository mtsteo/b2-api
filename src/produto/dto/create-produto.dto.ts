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
    subCateg_1_Id : string
    @IsString()
    subCateg_2_Id : string
    @IsString()
    @IsNotEmpty()
    ncm : string
    @IsNotEmpty()
    @IsString()
    empresaId : string
}
