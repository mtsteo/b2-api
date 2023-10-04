import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { CnpjModule } from './cnpj/cnpj.module';
import { ConfigModule } from '@nestjs/config';
import { NegociacaoModule } from './negociacao/negociacao.module';
import { HttpModule } from '@nestjs/axios';
import { PJuridicaModule } from './p-juridica/p-juridica.module';

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
    PJuridicaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
