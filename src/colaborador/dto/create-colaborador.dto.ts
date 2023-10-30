import { IsNotEmpty, IsString } from "class-validator";

export class CreateColaboradorDto {
    @IsNotEmpty()
    colaboradorId : string 
    @IsNotEmpty()
    empresaId : String
    role : string
}
