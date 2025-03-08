import { PrismaService } from '@/prisma/prisma.service';

import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TokenService {
    public constructor(private readonly prismaService: PrismaService) {}

    @Cron(CronExpression.EVERY_DAY_AT_NOON)
    public async handleExpiresToken() {
        await this.prismaService.token
            .deleteMany({
                where: {
                    expiresIn: {
                        lt: new Date(),
                    },
                },
            })
            .then(() => {
                console.log('Токены успешно удалены');
            })
            .catch(error => {
                console.error('Ошибка при удалении токенов:', error);
            });
    }
}
