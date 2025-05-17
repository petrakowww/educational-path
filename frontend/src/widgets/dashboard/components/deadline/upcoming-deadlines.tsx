'use client';

import {
	Badge,
	Button,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/shared/ui';
import Link from 'next/link';
import { ClockIcon } from 'lucide-react';
import { formatDistanceToNowStrict, differenceInHours } from 'date-fns';
import { ru } from 'date-fns/locale';

type MockDeadline = {
	id: string;
	title: string;
	deadline: string;
};

const mockDeadlines: MockDeadline[] = [
	{
		id: '1',
		title: 'Курс по TypeScript',
		deadline: new Date(Date.now() + 12 * 60 * 60 * 1000).toISOString(), // через 12 часов
	},
	{
		id: '2',
		title: 'Введение в React',
		deadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(), // через 3 дня
	},
	{
		id: '3',
		title: 'Базовый HTML и CSS',
		deadline: new Date(Date.now() + 9 * 24 * 60 * 60 * 1000).toISOString(), // через 9 дней
	},
];

const getBadgeColor = (hoursLeft: number) => {
	if (hoursLeft < 24) return 'destructive'; // красный
	if (hoursLeft < 72) return 'warning'; // жёлтый
	return 'success'; // зелёный
};

export const UpcomingDeadlines = () => {
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
				{mockDeadlines.length === 0 ? (
					<div className="text-muted-foreground text-sm">
						У вас пока нет активных дедлайнов.
					</div>
				) : (
					mockDeadlines.map((route) => {
						const deadline = new Date(route.deadline);
						const hoursLeft = differenceInHours(deadline, now);
						const color = getBadgeColor(hoursLeft);
						const label = formatDistanceToNowStrict(deadline, {
							addSuffix: true,
							locale: ru,
						});

						return (
							<div
								key={route.id}
								className="flex items-center justify-between gap-6"
							>
								<div className="flex-1 min-w-0">
									<div className="text-sm truncate">
										{route.title}
									</div>
									<Badge
										variant={
											color === 'destructive'
												? 'destructive'
												: 'secondary'
										}
										className={`mt-1 hover:none ${
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
									<Link href={`/maps/${route.id}`}>
										Перейти
									</Link>
								</Button>
							</div>
						);
					})
				)}
			</CardContent>
		</Card>
	);
};
