import { ConflictException, Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { User } from '@prisma/__generated__';

@Injectable()
export class UserCourseDeadlineService {
	constructor(private readonly prisma: PrismaService) {}

	async startDeadline(
		user: User,
		topicMapId: string,
		deadline: Date
	) {
		const now = new Date();

		if (deadline < now) {
			throw new BadRequestException('Нельзя установить дедлайн в прошлом');
		}

		const userCourse = await this.prisma.userCourse.findFirst({
			where: { userId: user.id, topicMapId },
			include: { topicMap: true, progress: true, UserChecklistProgress: true },
		});

		if (!userCourse) {
			throw new NotFoundException('Курс не найден');
		}

		if (userCourse.deadline) {
			throw new ConflictException('Дедлайн уже установлен');
		}

		const updated = await this.prisma.userCourse.update({
			where: { id: userCourse.id },
			data: { deadline },
			include: { topicMap: true, progress: true, UserChecklistProgress: true },
		});

		return updated;
	}

	async updateDeadline(
		user: User,
		topicMapId: string,
		deadline: Date
	) {
		const now = new Date();

		if (deadline < now) {
			throw new BadRequestException('Нельзя установить дедлайн в прошлом');
		}

		const userCourse = await this.prisma.userCourse.findFirst({
			where: { userId: user.id, topicMapId },
		});

		if (!userCourse) {
			throw new NotFoundException('Курс не найден');
		}

		const updated = await this.prisma.userCourse.update({
			where: { id: userCourse.id },
			data: { deadline },
		});

		return updated;
	}

	async removeDeadline(user: User, topicMapId: string) {
		const course = await this.prisma.userCourse.findFirst({
			where: { userId: user.id, topicMapId },
		});

		if (!course) {
			throw new NotFoundException('Курс не найден');
		}

		const updated = await this.prisma.userCourse.update({
			where: { id: course.id },
			data: { deadline: null },
		});

		return updated;
	}
}
