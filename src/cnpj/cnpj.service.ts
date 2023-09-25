import { HttpModule, HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { CnpjDto } from './dto';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class CnpjService {
    constructor(private api: HttpService, private config: ConfigService) { }

    async getCnpjData(dto: CnpjDto): Promise<{}> {
        try {
            const url = this.config.get('URL_CNPJ_API')
            return  this.api.get(url + dto.cnpj)
                .pipe(map((res) => res.data))
    

        } catch (error) {
            if (error) throw new ForbiddenException('API indisponível')
        }


    }

}