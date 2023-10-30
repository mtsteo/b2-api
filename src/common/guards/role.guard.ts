import { AuthGuard } from "@nestjs/passport";

export class RoleGuard extends AuthGuard('role'){
    constructor(){
        super()
     }
}