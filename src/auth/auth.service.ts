import { Injectable, ForbiddenException } from '@nestjs/common';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signIn(dto: AuthDto) {
    const user = await this.prisma.proprietario.findFirst({
      where: {
        email: dto.email,
      },
    });

    if (!user) throw new ForbiddenException('Usuário não encontrado!');
    const passwordMatch = await argon.verify(user.senha, dto.password);
    if (!passwordMatch) throw new ForbiddenException('Senha incorreta!');
    delete user.senha, user.data_cadastro
    const token = this.signToken(user);
    return token;
  }

  async signToken(userData: object): Promise<{}> {
    

    const token = await this.jwt.signAsync(userData, {
      // expiresIn: '15m',
      secret: this.config.get('JWT_SECRET'),
    });

    return {
      access_token: token,
      data: userData
    };
  }
}
