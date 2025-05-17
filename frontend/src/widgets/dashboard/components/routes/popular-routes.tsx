'use client';

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Button,
} from '@/shared/ui';
import Link from 'next/link';
import { FlameIcon, CheckCircleIcon } from 'lucide-react';

type MockRoute = {
	id: string;
	title: string;
	description?: string;
	favoritesCount: number;
	createdAt: string;
	isVerified?: boolean;
	tags?: string[];
};

const mockPopularRoutes: MockRoute[] = [
	{
		id: '1',
		title: 'Основы фронтенда',
		description: 'HTML, CSS и введение в JavaScript.',
		favoritesCount: 142,
		createdAt: '2024-11-01',
		isVerified: true,
		tags: ['frontend', 'html'],
	},
	{
		id: '2',
		title: 'Разработка на React',
		description: 'Современные подходы к разработке SPA.',
		favoritesCount: 110,
		createdAt: new Date().toISOString(),
		isVerified: true,
		tags: ['react', 'spa'],
	},
	{
		id: '3',
		title: 'Алгоритмы и структуры данных',
		description: 'Базовые и продвинутые алгоритмы.',
		favoritesCount: 97,
		createdAt: '2025-03-28',
	},
];

export const PopularRoutes = () => {
	const routes = mockPopularRoutes;

	const isNew = (createdAt: string) => {
		const created = new Date(createdAt).getTime();
		const now = Date.now();
		return now - created < 7 * 24 * 60 * 60 * 1000;
	};

	return (
		<section className="space-y-6">
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-semibold flex items-center gap-2">
					<FlameIcon className="size-5 text-orange-500" />
					Популярные маршруты
				</h2>
				<Button variant="link" asChild>
					<Link href="/maps/search">Смотреть все</Link>
				</Button>
			</div>

			{routes.length > 0 ? (
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{routes.map((route) => {
						const showNew = isNew(route.createdAt);
						const showVerified = route.isVerified;

						return (
							<Card
								key={route.id}
								className="flex flex-col justify-between h-full"
							>
								<CardHeader className="flex-grow space-y-1">
									<div className="flex items-start justify-between">
										<CardTitle
											title={route.title}
											className="line-clamp-1 text-base"
										>
											{route.title}
										</CardTitle>
									</div>

									<div className="flex flex-wrap gap-1">
										{showVerified && (
											<span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded flex items-center">
												<CheckCircleIcon className="inline size-3 mr-1" />
												Верифицировано
											</span>
										)}
										{showNew && (
											<span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded flex items-center">
												Новинка
											</span>
										)}
									</div>

									<CardDescription className="line-clamp-3 text-sm text-muted-foreground">
										{route.description || 'Без описания'}
									</CardDescription>
								</CardHeader>

								<CardContent className="flex flex-col gap-2">
									{route.tags && route.tags.length > 0 && (
										<div className="flex gap-1 flex-wrap text-xs text-muted-foreground">
											{route.tags.map((tag) => (
												<span
													key={tag}
													className="bg-muted px-2 py-0.5 rounded"
												>
													#{tag}
												</span>
											))}
										</div>
									)}
									<div className="flex items-center justify-between pt-2 border-t">
										<div className="text-xs text-muted-foreground">
											❤ {route.favoritesCount} добавлений
										</div>
										<Button size="sm" variant="secondary" asChild>
											<Link href={`/maps/${route.id}`}>Открыть</Link>
										</Button>
									</div>
								</CardContent>
							</Card>
						);
					})}
				</div>
			) : (
				<div className="text-muted-foreground text-sm border border-border p-4 rounded-md">
					Популярные маршруты ещё не добавлены. Загляните позже или воспользуйтесь поиском по картам.
				</div>
			)}
		</section>
	);
};
