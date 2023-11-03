import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProdutoService {
  constructor(private prisma: PrismaService) {}

  async create(createProdutoDto: CreateProdutoDto) {
    try {
      await this.prisma.produto.create({
        data: {
          nome: createProdutoDto.nome,
          descricao: createProdutoDto.descricao,
          ncm: createProdutoDto.ncm,
          empresa: {
            connect: {
              id: createProdutoDto.empresaId,
            },
          },
          categoria: {
            connect: {
              id: createProdutoDto.categoriaId,
              subCategoria1: {
                id: createProdutoDto.subCateg_1_Id,
                subCategoria2: {
                  id: createProdutoDto.subCateg_2_Id,
                },
              },
            },
          },
        },
      });
      return 'Produto criado!';
    } catch (error) {
      return error;
    }
  }

  findAll() {
    return `This action returns all produto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} produto`;
  }

  async update(id: string, updateProdutoDto: UpdateProdutoDto) {
    try {
      let data = await this.prisma.produto.update({
        where: {
          id: id,
        },
        data: {
          ...updateProdutoDto,
        },
      });

      return data;
    } catch (error) {
      return error;
    }
    return `This action updates a #${id} produto`;
  }

  remove(id: number) {
    return `This action removes a #${id} produto`;
  }
}
