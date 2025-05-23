'use client';

import { useGetRecentActivityQuery } from '@/shared/graphql/generated/output';
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	Button,
} from '@/shared/ui';
import { MapIcon, VideoIcon } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/app/providers/auth/auth-provider';

export const RecentActivityRoutesAndCourses = () => {
	const { isAuthenticated } = useAuth();

	const { data, loading } = useGetRecentActivityQuery({
		skip: !isAuthenticated,
	});

	if (!isAuthenticated) return null;

	const recentRoutes = data?.getRecentActivity?.recentRoutes ?? [];
	const recentVideoCourses = data?.getRecentActivity?.recentVideoCourses ?? [];
	
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-base">Недавняя активность</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				{!loading && recentRoutes.length === 0 && recentVideoCourses.length === 0 && (
					<p className="text-muted-foreground text-sm">
						Вы ещё не начинали обучение. Добавьте маршруты или начните просмотр курса.
					</p>
				)}

				{recentRoutes.map((route) => (
					<div key={route.id} className="flex items-center justify-between gap-4">
						<div className="flex items-center gap-2 text-sm">
							<MapIcon className="w-4 h-4 text-primary" />
							<span className="font-medium line-clamp-1">{route.title}</span>
						</div>
						<Button size="sm" variant="secondary" asChild>
							<Link href={`/maps/${route.id}`}>Открыть</Link>
						</Button>
					</div>
				))}

				{recentVideoCourses.map((course) => (
					<div key={course.id} className="flex items-center justify-between gap-4">
						<div className="flex flex-col min-w-0">
							<div className="flex items-center gap-2 text-sm">
								<VideoIcon className="w-4 h-4 text-blue-500" />
								<span className="font-medium line-clamp-1">{course.title}</span>
							</div>
							<p className="text-xs text-muted-foreground truncate">
								Связанная тема: {course.title}
							</p>
						</div>
						<Button size="sm" variant="secondary" asChild>
							<Link href={`/video/${course.id}`}>Продолжить</Link>
						</Button>
					</div>
				))}
			</CardContent>
		</Card>
	);
};
