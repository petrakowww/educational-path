'use client';

import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
} from '@/shared/ui';
import { Progress } from '@/shared/ui/progress/progress';


import { CheckCircleIcon, PlayCircleIcon, ClockIcon } from 'lucide-react';

const goals = [
	{
		title: 'Темы недели',
		value: 3,
		target: 5,
		icon: <CheckCircleIcon className="w-4 h-4 text-green-600" />,
	},
	{
		title: 'Просмотрено видео',
		value: 2,
		target: 4,
		icon: <PlayCircleIcon className="w-4 h-4 text-blue-600" />,
	},
	{
		title: 'Осталось до дедлайнов',
		value: 1,
		target: 3,
		icon: <ClockIcon className="w-4 h-4 text-yellow-600" />,
	},
];

export const WeeklyGoals = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-base">Цели на неделю</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				{goals.map((goal, idx) => {
					const percentage = Math.min(
						Math.round((goal.value / goal.target) * 100),
						100
					);

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
						</div>
					);
				})}
			</CardContent>
		</Card>
	);
};
