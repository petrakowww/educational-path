'use client';

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Button,
	Skeleton,
} from '@/shared/ui';
import Link from 'next/link';
import { FlameIcon, CheckCircleIcon } from 'lucide-react';
import { useGetPopularRoutesExtendedQuery } from '@/shared/graphql/generated/output';
import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';

export const PopularRoutes = () => {
	const { data, loading } = useGetPopularRoutesExtendedQuery();

	const isNew = (createdAt: string) => {
		const created = new Date(createdAt).getTime();
		const now = Date.now();
		return now - created < 7 * 24 * 60 * 60 * 1000;
	};

	if (loading) {
		return (
			<section className="space-y-6">
				<h2 className="text-xl font-semibold flex items-center gap-2">
					<FlameIcon className="size-5 text-orange-500" />
					Популярные маршруты
				</h2>
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{Array.from({ length: 3 }).map((_, idx) => (
						<Skeleton key={idx} className="h-40 w-full" />
					))}
				</div>
			</section>
		);
	}

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

			{data?.getPopularRoutes?.length ? (
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{data.getPopularRoutes.map(route => (
						<Card key={route.id} className="flex flex-col justify-between h-full">
							<CardHeader className="space-y-1">
								<CardTitle className="text-base line-clamp-1">{route.title}</CardTitle>
								<div className="flex gap-2 flex-wrap text-xs">
									{route.isVerified === 'VERIFIED' && (
										<span className="bg-green-100 text-green-800 px-2 py-0.5 rounded flex items-center">
											<CheckCircleIcon className="mr-1 size-3" />
											Верифицировано
										</span>
									)}
									{isNew(route.createdAt) && (
										<span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">
											Новинка
										</span>
									)}
								</div>
								<CardDescription className="line-clamp-3">
									{route.description || 'Без описания'}
								</CardDescription>
							</CardHeader>
							<CardContent className="pt-2 border-t flex justify-between items-center">
								<div className="text-xs text-muted-foreground">
									Добавлено{' '}
									{formatDistanceToNow(new Date(route.createdAt), {
										addSuffix: true,
										locale: ru,
									})}
								</div>
								<Button size="sm" variant="secondary" asChild>
									<Link href={`/maps/${route.id}`}>Открыть</Link>
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			) : (
				<div className="text-muted-foreground text-sm border border-border p-4 rounded-md">
					Популярные маршруты ещё не добавлены.
				</div>
			)}
		</section>
	);
};
