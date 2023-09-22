import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto';
import * as argon from 'argon2'
import { PrismaService } from '../prisma/prisma.service'


@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) { }


    async signIn(dto: AuthDto) {
        const hash = argon.hash(dto.password)
        // const user = await this.prisma.

    }

    signUp(dto: AuthDto) {
        console.log(dto)
    }

}
