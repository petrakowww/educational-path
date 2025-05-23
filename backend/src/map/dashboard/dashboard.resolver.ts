import { Authorization } from '@/auth/decorators/auth.decorator';
import { CurrentUser } from '@/auth/decorators/user.decorator';
import { Route } from '@/map/route/model/route.model';
import { VideoCourse } from '@/map/topic/video-course/model/video-course.model';

import { FavoriteRouteItem } from './dto/favorite-route-item';
import { RecentActivityOutput } from './dto/recently-activity-output';
import { UpcomingDeadlineItem } from './dto/upcoming-deadline';
import { WeeklyGoalsOutput } from './dto/weekly-goals';
import { WeeklyProgressItem } from './dto/weekly-progress.dto';
import { Query, Resolver } from '@nestjs/graphql';
import { User } from '@prisma/__generated__';

import { DashboardService } from './dashboard.service';

@Resolver()
export class DashboardResolver {
  constructor(private readonly dashboardService: DashboardService) {}

  @Authorization()
  @Query(() => RecentActivityOutput)
  async getRecentActivity(@CurrentUser() user: User) {
    return this.dashboardService.getRecentActivity(user);
  }

  @Authorization()
  @Query(() => WeeklyGoalsOutput)
  async getWeeklyGoals(@CurrentUser() user: User) {
    return this.dashboardService.getWeeklyGoals(user);
  }

  @Query(() => [Route])
  async getPopularRoutes() {
    return this.dashboardService.getPopularRoutes();
  }

  @Query(() => [Route])
  async getRecentlyAddedRoutes() {
    return this.dashboardService.getRecentlyAddedRoutes();
  }

  @Query(() => [VideoCourse])
  async getPopularVideoCourses() {
    return this.dashboardService.getPopularVideoCourses();
  }

  @Authorization()
  @Query(() => [WeeklyProgressItem])
  async getWeeklyProgress(@CurrentUser() user: User) {
    return this.dashboardService.getWeeklyProgress(user);
  }

  @Authorization()
  @Query(() => [FavoriteRouteItem])
  async getFavoriteRoutes(@CurrentUser() user: User) {
    return this.dashboardService.getFavoriteRoutes(user);
  }

  @Authorization()
  @Query(() => [UpcomingDeadlineItem])
  async getUpcomingDeadlines(@CurrentUser() user: User) {
    return this.dashboardService.getUpcomingDeadlines(user);
  }
}

