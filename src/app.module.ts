import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { NegociacaoModule } from './negociacao/negociacao.module';
import { HttpModule } from '@nestjs/axios';
import { ProprietarioModule } from './proprietario/proprietario.module';
import { ReceitawsModule } from './receitaws/receitaws.module';
import { ProdutoModule } from './produto/produto.module';
import { EmpresaModule } from './empresa/empresa.module';
import { ColaboradorModule } from './colaborador/colaborador.module';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    PrismaModule,
    NegociacaoModule,
    ProprietarioModule,
    ReceitawsModule,
    ProdutoModule,
    EmpresaModule,
    ColaboradorModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
