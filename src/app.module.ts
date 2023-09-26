import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { CnpjModule } from './cnpj/cnpj.module';
import { ProdutoModule } from './produto/produto.module';
import { ConfigModule } from '@nestjs/config';
import { NegociacaoModule } from './negociacao/negociacao.module';


@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule, PrismaModule, CnpjModule, ProdutoModule, NegociacaoModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
