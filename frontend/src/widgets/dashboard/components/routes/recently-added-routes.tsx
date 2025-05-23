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
import { ClockIcon } from 'lucide-react';
import { useGetRecentlyAddedRoutesExtendedQuery } from '@/shared/graphql/generated/output';
import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';

export const RecentlyAddedRoutes = () => {
	const { data, loading } = useGetRecentlyAddedRoutesExtendedQuery();

	if (loading) {
		return (
			<section className="space-y-6">
				<h2 className="text-xl font-semibold flex items-center gap-2">
					<ClockIcon className="size-5 text-blue-500" />
					Недавно добавленные
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
					<ClockIcon className="size-5 text-blue-500" />
					Недавно добавленные
				</h2>
				<Button variant="link" asChild>
					<Link href="/maps/search?sort=new">Смотреть все</Link>
				</Button>
			</div>

			{data?.getRecentlyAddedRoutes?.length ? (
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{data.getRecentlyAddedRoutes.map(route => (
						<Card key={route.id} className="flex flex-col justify-between h-full">
							<CardHeader className="space-y-1">
								<CardTitle className="text-base line-clamp-1">{route.title}</CardTitle>
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
					Пока нет недавно добавленных маршрутов.
				</div>
			)}
		</section>
	);
};
