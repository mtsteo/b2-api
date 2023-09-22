import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authServices: AuthService) {}

  @Post('login')
  signIn(@Body() dto: AuthDto ) {
    return this.authServices.signIn(dto)
  }

  @Post('cadastro')
  signUp(@Body() dto :AuthDto) {
   return this.authServices.signUp(dto)
  }
}
