import { PrismaService } from '@/prisma/prisma.service';

import { SkillProfileDto } from './dto/skill-profile.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '@prisma/__generated__';

@Injectable()
export class UserSkillProfileService {
    public constructor(private readonly prismaService: PrismaService) {}

    public async updateSkillProfile(user: User, dto: SkillProfileDto) {
        const existingProfile =
            await this.prismaService.skillProfile.findUnique({
                where: { userId: user.id },
            });

        if (dto.profilename) {
            const profileNameExists =
                await this.prismaService.skillProfile.findUnique({
                    where: { profilename: dto.profilename },
                });

            if (profileNameExists && profileNameExists.userId !== user.id) {
                throw new BadRequestException('Имя профиля уже занято.');
            }
        }

        if (existingProfile) {
            return await this.prismaService.skillProfile.update({
                where: { userId: user.id },
                data: dto,
            });
        } else {
            return await this.prismaService.skillProfile.create({
                data: {
                    userId: user.id,
                    ...dto,
                },
            });
        }
    }
}
