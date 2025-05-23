'use client';

import { useGetWeeklyGoalsQuery } from '@/shared/graphql/generated/output';
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	Button,
} from '@/shared/ui';
import { Progress } from '@/shared/ui/progress/progress';
import { CheckCircleIcon, PlayCircleIcon, ClockIcon, InfoIcon } from 'lucide-react';
import { useAuth } from '@/app/providers/auth/auth-provider';
import { useState } from 'react';

export const WeeklyGoals = () => {
	const { isAuthenticated } = useAuth();
	const { data, loading } = useGetWeeklyGoalsQuery({
		skip: !isAuthenticated,
	});

	const [showInfo, setShowInfo] = useState(false);

	if (!isAuthenticated || loading || !data?.getWeeklyGoals) return null;

	const goals = [
		{
			title: 'Темы недели',
			...data.getWeeklyGoals.topics,
			icon: <CheckCircleIcon className="w-4 h-4 text-green-600" />,
			description: 'Количество учебных тем, завершённых на этой неделе.',
		},
		{
			title: 'Просмотрено видео',
			...data.getWeeklyGoals.videos,
			icon: <PlayCircleIcon className="w-4 h-4 text-blue-600" />,
			description: 'Количество видеоглав, просмотренных на этой неделе.',
		},
		{
			title: 'Осталось до дедлайнов',
			...data.getWeeklyGoals.deadlines,
			icon: <ClockIcon className="w-4 h-4 text-yellow-600" />,
			description: 'Курсы, срок прохождения которых истекает в ближайшие 7 дней.',
		},
	];

	return (
		<Card>
			<CardHeader className="flex flex-row items-center space-y-0">
				<div>
					<CardTitle className="text-base">Цели на неделю</CardTitle>
				</div>
				<Button
					className='p-0 m-0'
					variant="ghost"
					size="icon"
					onClick={() => setShowInfo((v) => !v)}
					title="Что означают эти показатели?"
				>
					<InfoIcon className="text-muted-foreground" />
				</Button>
			</CardHeader>

			<CardContent className="space-y-4">
				{goals.map((goal, idx) => {
					const percentage = Math.min(Math.round((goal.value / goal.target) * 100), 100);

					return (
						<div key={idx} className="space-y-1">
							<div className="flex items-center justify-between text-sm font-medium">
								<div className="flex items-center gap-2">
									{goal.icon}
									{goal.title}
								</div>
								<span className="text-muted-foreground">
									{goal.value} / {goal.target}
								</span>
							</div>
							<Progress value={percentage} />
							{showInfo && (
								<p className="text-xs text-muted-foreground">{goal.description}</p>
							)}
						</div>
					);
				})}
			</CardContent>
		</Card>
	);
};
