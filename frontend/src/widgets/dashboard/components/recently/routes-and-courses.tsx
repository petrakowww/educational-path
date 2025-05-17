'use client';

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Button,
} from '@/shared/ui';
import Link from 'next/link';
import { MapIcon, VideoIcon } from 'lucide-react';

type RecentRoute = {
	id: string;
	title: string;
	lastAccessed: string;
};

type RecentVideoCourse = {
	id: string;
	title: string;
	topicTitle: string;
	lastWatched: string;
};

const recentRoutes: RecentRoute[] = [
	{
		id: 'route-1',
		title: 'Фронтенд-разработка с нуля',
		lastAccessed: '2024-05-10T12:00:00Z',
	},
	{
		id: 'route-2',
		title: 'Алгоритмы и структуры данных',
		lastAccessed: '2024-05-12T15:30:00Z',
	},
];

const recentVideoCourses: RecentVideoCourse[] = [
	{
		id: 'course-1',
		title: 'React Hooks Deep Dive',
		topicTitle: 'Разработка на React',
		lastWatched: '2024-05-13T18:00:00Z',
	},
];

export const RecentActivityRoutesAndCourses = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-base">
					Недавняя активность
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				{recentRoutes.length === 0 && recentVideoCourses.length === 0 && (
					<div className="text-muted-foreground text-sm">
						Вы ещё не начинали обучение. Добавьте маршруты или начните просмотр курса.
					</div>
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
								Связанная тема: {course.topicTitle}
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
