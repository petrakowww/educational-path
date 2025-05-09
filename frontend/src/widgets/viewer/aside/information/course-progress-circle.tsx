'use client';

import { Card, CardContent } from '@/shared/ui';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const CourseProgressCircle = ({ progress }: { progress: number }) => {
	const clamped = Math.max(0, Math.min(progress, 100));

	return (
		<Card>
			<CardContent className="p-4 flex items-center gap-4 justify-center">
				<span className="font-semibold text-primary">
					Выполнено курса
				</span>
				<CircularProgressbar
					value={clamped}
					text={`${clamped}%`}
					styles={buildStyles({
						textColor: 'hsl(var(--foreground))',
						pathColor: 'hsl(var(--primary))',
					})}
					className="items-center w-16 h-16"
				/>
			</CardContent>
		</Card>
	);
};
