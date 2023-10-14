import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { NegociacaoModule } from './negociacao/negociacao.module';
import { HttpModule } from '@nestjs/axios';
import { PJuridicaModule } from './p-juridica/p-juridica.module';
import { ReceitawsModule } from './receitaws/receitaws.module';
import { ProdutoModule } from './produto/produto.module';
import { EmpresaModule } from './empresa/empresa.module';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    PrismaModule,
    NegociacaoModule,
    PJuridicaModule,
    ReceitawsModule,
    ProdutoModule,
    EmpresaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
