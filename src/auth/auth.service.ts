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
    const proprietario = await this.prisma.proprietario.findFirst({
      where: {
        email: dto.email,
      },
    });

    if (!proprietario) throw new ForbiddenException('Usuário não encontrado!');
    const passwordMatch = await argon.verify(proprietario.senha, dto.password);
    if (!passwordMatch) throw new ForbiddenException('Senha incorreta!');
    return this.signToken(proprietario.id);
  }

  async signToken(proprietarioId: string): Promise<{}> {
    const payload = {
      id : proprietarioId,
    }
    const token = await this.jwt.signAsync(payload, {
      // expiresIn: '15m',
      secret: this.config.get('JWT_SECRET'),
    });

    return {
      access_token: token,
    };
  }
}
