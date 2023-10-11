import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateReceitawDto } from './dto/create-receitaw.dto';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';


@Injectable()
export class ReceitawsService {
  constructor(private api: HttpService, private config: ConfigService) { }

  async findOne(cnpj: CreateReceitawDto) {
    try {
      const url = await this.config.get('URL_CNPJ_API')
      const { data } = await firstValueFrom(this.api.get(url + cnpj))
      return {
          info: data
      }

  } catch (error) {
      throw new ForbiddenException('API Indisponível')
  }


}

   
}