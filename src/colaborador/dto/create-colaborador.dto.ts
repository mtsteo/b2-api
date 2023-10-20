import { IsNotEmpty, IsString } from "class-validator";

export class CreateColaboradorDto {
    @IsNotEmpty()
    @IsString()
    cpf : string 
}
