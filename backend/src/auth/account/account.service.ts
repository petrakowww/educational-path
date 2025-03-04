import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { TypeUserInfo } from '../provider/services/types/user-info.type';

@Injectable()
export class AccountService {
    constructor(private readonly prismaService: PrismaService) {}

    public async findOAuthAccount(accountId: string, provider: string) {
        const account = this.prismaService.account.findUnique({where: {
            accountId_provider: {
                accountId: accountId.toString(),
                provider: provider,
            }
        }})

        return account;
    }

    public async updateOAuthAccountTokens(profile: TypeUserInfo) {
        await this.prismaService.account.update({
            where: {accountId_provider: {
                accountId: profile.accountId.toString(),
                provider: profile.provider
              }},
            data: {
                accessToken: profile.accessToken ?? undefined,
                refreshToken: profile.refreshToken ?? undefined,
                expiresAt: new Date(profile.expiresAt)
            }
        })
    }

    public async createOAuthAccount(userId: string, profile: TypeUserInfo) {
        await this.prismaService.account.create({
            data: {
                userId: userId,
                accountId: profile.accountId.toString(),
                type: 'oauth',
                provider: profile.provider,
                accessToken: profile.accessToken,
                refreshToken: profile.refreshToken,
                expiresAt: new Date(profile.expiresAt),
            },
        });
    } 
}
