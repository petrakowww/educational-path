'use client';

import { PopularRoutes } from '@/widgets/dashboard/components/routes/popular-routes';
import { RecentlyAddedRoutes } from '@/widgets/dashboard/components/routes/recently-added-routes';
import { WeeklyProgressChart } from '@/widgets/dashboard/components/chart/weekly-progress';
import { FavoriteRoutesChart } from '@/widgets/dashboard/components/chart/favorite-routes-chart';
import { UpcomingDeadlines } from '@/widgets/dashboard/components/deadline/upcoming-deadlines';
import { DashboardQuickActions } from '@/widgets/dashboard/components/action/quick-actions';
import { DashboardHeader } from '@/widgets/dashboard/components/header/dashboard-header';
import { RecentActivityRoutesAndCourses } from '@/widgets/dashboard/components/recently/routes-and-courses';
import { WeeklyGoals } from '@/widgets/dashboard/components/deadline/weekly-goals';
import { PopularVideoCourses } from '@/widgets/dashboard/components/courses/popular-video-courses';

export default function DashboardPage() {
	return (
		<section className="space-y-8">
			{/* Вводная панель */}
			<DashboardHeader />

			{/* Цели и активность */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
				<div className="lg:col-span-2 space-y-4">
					<WeeklyGoals />
					<RecentActivityRoutesAndCourses />
				</div>
				<div className="space-y-4">
					<UpcomingDeadlines />
				</div>
			</div>

			{/* Быстрые действия на всю ширину */}
			<DashboardQuickActions />

			{/* Графики */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				<WeeklyProgressChart />
				<FavoriteRoutesChart />
			</div>

			{/* Популярные и новые маршруты */}
			<div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
				<PopularRoutes />
				<RecentlyAddedRoutes />
			</div>

			{/* Видеокурсы */}
			<PopularVideoCourses />
		</section>
	);
}
