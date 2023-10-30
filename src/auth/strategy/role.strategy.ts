import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoleStrategy extends PassportStrategy(Strategy, 'role') {
  constructor(
    private config: ConfigService,
    private prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('JWT_SECRET'),
    });
  }

  async validate(payload: { id: string }) {
    let colabRole = await this.prisma.empresaColaborador.findFirst({
      where: {
        colaboradorId: payload.id,
      },
      select: {
        admin: true,
      },
    });

    if (!colabRole.admin) {
      return null;
    }
    return colabRole;
  }
}
