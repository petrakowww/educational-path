import { PrismaService } from '@/prisma/prisma.service';

import { UpdateSkillProfileDto } from './dto/update-skill-profile.dto';
import { Injectable } from '@nestjs/common';
import { SkillProfile } from '@prisma/__generated__';

@Injectable()
export class SkillProfileService {
    public constructor(private readonly prismaService: PrismaService) {}

    public async updateProfile(userId: string, dto: UpdateSkillProfileDto) {
        const existingProfile =
            await this.prismaService.skillProfile.findUnique({
                where: { userId },
            });

        const updateData: Partial<SkillProfile> = {};

        if (dto.profilename) updateData.profilename = dto.profilename;
        if (dto.headline) updateData.headline = dto.headline;
        if (dto.githubUrl) updateData.githubUrl = dto.githubUrl;
        if (dto.vkUrl) updateData.vkUrl = dto.vkUrl;
        if (dto.telegramUrl) updateData.telegramUrl = dto.telegramUrl;

        if (existingProfile) {
            return await this.prismaService.skillProfile.update({
                where: { userId },
                data: updateData,
            });
        } else {
            return await this.prismaService.skillProfile.create({
                data: {
                    userId,
                    ...updateData,
                },
            });
        }
    }
}
