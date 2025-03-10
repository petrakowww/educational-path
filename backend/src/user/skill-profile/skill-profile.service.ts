import { PrismaService } from '@/prisma/prisma.service';

import { SkillProfileDto } from './dto/update-skill-profile.dto';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class SkillProfileService {
    public constructor(private readonly prismaService: PrismaService) {}

    public async updateProfile(userId: string, dto: SkillProfileDto) {
        const existingProfile =
            await this.prismaService.skillProfile.findUnique({
                where: { userId },
            });


        if (dto.profilename) {
            const profileNameExists =
                await this.prismaService.skillProfile.findUnique({
                    where: { profilename: dto.profilename },
                });

            if (profileNameExists && profileNameExists.userId !== userId) {
                throw new BadRequestException('Имя профиля уже занято.');
            }
        }

        if (existingProfile) {
            return await this.prismaService.skillProfile.update({
                where: { userId },
                data: dto,
            });
        } else {
            return await this.prismaService.skillProfile.create({
                data: {
                    userId,
                    ...dto,
                },
            });
        }
    }
}
