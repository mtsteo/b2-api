import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { CnpjDto } from './dto';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CnpjService {
    constructor(private api: HttpService, private config: ConfigService) { }

    async getCnpjData(dto: CnpjDto): Promise<{}> {
        try {
            const url = await this.config.get('URL_CNPJ_API')
            const { data } = await firstValueFrom(this.api.get(url + dto.cnpj))
            return {
                info: data
            }

        } catch (error) {
            throw new ForbiddenException('API Indisponível')
        }


    }
}