'use client';

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Separator,
} from '@/shared/ui';
import {
	ResponsiveContainer,
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	CartesianGrid,
} from 'recharts';
import { useGetWeeklyProgressQuery } from '@/shared/graphql/generated/output';
import { useAuth } from '@/app/providers/auth/auth-provider';

export const WeeklyProgressChart = () => {
	const { isAuthenticated } = useAuth();
	const { data, loading } = useGetWeeklyProgressQuery({
		skip: !isAuthenticated,
	});

	if (!isAuthenticated || loading || !data?.getWeeklyProgress) return null;

  console.log(data);
	const chartData = data.getWeeklyProgress.map((entry) => ({
		date: entry.date,
		completed: entry.count,
	}));

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-base">Прогресс за неделю</CardTitle>
				<Separator />
			</CardHeader>
			<CardContent>
				<ResponsiveContainer width="100%" height={250}>
					<LineChart data={chartData}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="date" />
						<YAxis allowDecimals={false} />
						<Tooltip
							labelClassName="text-muted-foreground"
						/>
						<Line
							type="monotone"
							dataKey="completed"
							stroke="#22c55e"
							strokeWidth={2}
							dot={{ r: 4 }}
							activeDot={{ r: 6 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
};
