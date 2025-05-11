import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Authorization } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/auth/decorators/user.decorator';
import { User } from '@prisma/__generated__';
import { UserCourseDeadlineService } from './deadline.service';
import { UserCourse } from '../model/user-course.model';

@Resolver()
export class UserCourseDeadlineResolver {
	constructor(
		private readonly deadlineService: UserCourseDeadlineService
	) {}

	@Mutation(() => UserCourse)
	@Authorization()
	async startCourseDeadline(
		@CurrentUser() user: User,
		@Args('topicMapId') topicMapId: string,
		@Args('deadline', { type: () => Date }) deadline: Date
	) {
		return this.deadlineService.startDeadline(user, topicMapId, deadline);
	}

	@Mutation(() => UserCourse)
	@Authorization()
	async updateCourseDeadline(
		@CurrentUser() user: User,
		@Args('topicMapId') topicMapId: string,
		@Args('deadline', { type: () => Date }) deadline: Date
	)  {
		return this.deadlineService.updateDeadline(user, topicMapId, deadline);
	}

	@Mutation(() => UserCourse)
	@Authorization()
	async removeCourseDeadline(
		@CurrentUser() user: User,
		@Args('topicMapId') topicMapId: string
	) {
		return this.deadlineService.removeDeadline(user, topicMapId);
	}
}
