'use client';

import { PopularRoutes } from '@/widgets/dashboard/components/routes/popular-routes';
import { RecentlyAddedRoutes } from '@/widgets/dashboard/components/routes/recently-added-routes';
import { useAuth } from '../providers/auth/auth-provider';
import { WeeklyProgressChart } from '@/widgets/dashboard/components/chart/weekly-progress';
import { FavoriteRoutesChart } from '@/widgets/dashboard/components/chart/favorite-routes-chart';
import { UpcomingDeadlines } from '@/widgets/dashboard/components/deadline/upcoming-deadlines';
import { DashboardQuickActions } from '@/widgets/dashboard/components/action/quick-actions';
import { DashboardHeader } from '@/widgets/dashboard/components/header/dashboard-header';
import { RecentActivityRoutesAndCourses } from '@/widgets/dashboard/components/recently/routes-and-courses';
import { WeeklyGoals } from '@/widgets/dashboard/components/deadline/weekly-goals';
import { PopularVideoCourses } from '@/widgets/dashboard/components/courses/popular-video-courses';

export default function DashboardPage() {
	const { isAuthenticated } = useAuth();

	return (
		<section className="space-y-8">
			<DashboardHeader isAuthenticated={true} name="Petrakowww" />
			<RecentActivityRoutesAndCourses />
			<WeeklyGoals />
			<DashboardQuickActions />
			<UpcomingDeadlines />
			<div className="flex flex-col lg:flex-row gap-4">
				<div className="flex-1">
					<WeeklyProgressChart />
				</div>
				<div className="flex-1">
					<FavoriteRoutesChart />
				</div>
			</div>
			<PopularRoutes />
			<RecentlyAddedRoutes />
			<PopularVideoCourses />
		</section>
	);
}
