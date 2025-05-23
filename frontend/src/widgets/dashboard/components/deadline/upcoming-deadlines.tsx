'use client';

import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	Button,
	Badge,
} from '@/shared/ui';
import { ClockIcon } from 'lucide-react';
import Link from 'next/link';
import { useGetUpcomingDeadlinesQuery } from '@/shared/graphql/generated/output';
import { differenceInHours, formatDistanceToNowStrict } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useAuth } from '@/app/providers/auth/auth-provider';

const getBadgeColor = (hoursLeft: number) => {
	if (hoursLeft < 24) return 'destructive';
	if (hoursLeft < 72) return 'warning';
	return 'success';
};

export const UpcomingDeadlines = () => {
	const { isAuthenticated } = useAuth();
	const { data, loading } = useGetUpcomingDeadlinesQuery({
		skip: !isAuthenticated,
	});

	if (!isAuthenticated || loading || !data?.getUpcomingDeadlines?.length)
		return null;

	const now = new Date();

	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center gap-2 text-base">
					<ClockIcon className="w-5 h-5 text-primary" />
					Ближайшие дедлайны
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				{data.getUpcomingDeadlines.map((deadline) => {
					const end = new Date(deadline.deadline);
					const hoursLeft = differenceInHours(end, now);
					const color = getBadgeColor(hoursLeft);
					const label = formatDistanceToNowStrict(end, {
						addSuffix: true,
						locale: ru,
					});

					return (
						<div
							key={deadline.id}
							className="flex items-center justify-between gap-6"
						>
							<div className="flex-1 min-w-0">
								<div className="text-sm truncate">
									{deadline.title}
								</div>
								<Badge
									variant={
										color === 'destructive'
											? 'destructive'
											: 'secondary'
									}
									className={`mt-1 inline-flex items-center justify-center whitespace-nowrap px-2 py-0.5 text-xs min-w-fit ${
										color === 'warning'
											? 'bg-yellow-100 text-yellow-800'
											: color === 'success'
												? 'bg-green-100 text-green-800'
												: ''
									}`}
								>
									до дедлайна: {label}
								</Badge>
							</div>
							<Button variant="outline" size="sm" asChild>
								<Link href={`/maps/${deadline.id}`}>
									Перейти
								</Link>
							</Button>
						</div>
					);
				})}
			</CardContent>
		</Card>
	);
};
