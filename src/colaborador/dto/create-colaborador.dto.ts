import { IsBoolean, IsNotEmpty, IsString, isNotEmpty } from "class-validator";

export class CreateColaboradorDto {
    @IsNotEmpty()
    colaboradorId : string 
    @IsNotEmpty()
    empresaId : String
    @IsBoolean()
    @IsNotEmpty()
    admin : boolean
}
