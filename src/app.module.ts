import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { CnpjModule } from './cnpj/cnpj.module';
import { ConfigModule } from '@nestjs/config';
import { NegociacaoModule } from './negociacao/negociacao.module';
import { HttpModule } from '@nestjs/axios';
import { PfisicaModule } from './pfisica/pfisica.module';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    PrismaModule,
    CnpjModule,
    NegociacaoModule,
    PfisicaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
