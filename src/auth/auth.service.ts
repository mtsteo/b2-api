import { Injectable, ForbiddenException } from '@nestjs/common';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService, private config : ConfigService) { }

  async signIn(dto: AuthDto) {
    // encontrar o usuário
    const user = await this.prisma.user.findFirst({
      where: {
        email: dto.email
      }
    });

    //Se o usuário nao existe tratar excessão!
    if (!user) throw new ForbiddenException('Usuário não encontrado!');

    //Comparar as senhas
    const passwordMatch = await argon.verify(user.password, dto.password);

    //Se a senha estiver icorreta, tratar excessão!
    if (!passwordMatch) throw new ForbiddenException('Senha incorreta!');

    const token = this.signToken(user.id.toString(), user.email)

    return token;
  }

  async signUp(dto: AuthDto) {
    try {
      const hash = await argon.hash(dto.password);
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          password: hash,
        },
      });
      delete user.password
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Email já cadastrado!');
        }
      }
    }
  }

  async signToken(userId: string, email: string): Promise<{}> {
    const payload = {
      sub: userId,
      email,
    }

    const token = await this.jwt.signAsync(payload, { expiresIn: "15m", secret: this.config.get('JWT_SECRET') })

    return {
      "access_token": token
    }

  }

}
