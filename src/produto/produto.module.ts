import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { RoleGuard } from 'src/common/guards/role.guard';
import { RoleStrategy } from 'src/auth/strategy/role.strategy';

@Module({
  controllers: [ProdutoController],
  providers: [ProdutoService,RoleGuard,RoleStrategy],
})
export class ProdutoModule {}
