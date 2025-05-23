'use client';

import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	Separator,
} from '@/shared/ui';
import {
	ResponsiveContainer,
	BarChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Bar,
} from 'recharts';
import { useGetFavoriteRoutesQuery } from '@/shared/graphql/generated/output';
import { useAuth } from '@/app/providers/auth/auth-provider';

export const FavoriteRoutesChart = () => {
	const { isAuthenticated } = useAuth();
	const { data, loading } = useGetFavoriteRoutesQuery({
		skip: !isAuthenticated,
	});

	if (!isAuthenticated || loading || !data?.getFavoriteRoutes?.length) return null;

	const chartData = data.getFavoriteRoutes.map((route) => ({
		name: route.name,
		favorites: route.favorites,
	}));


	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-base">Избранные маршруты</CardTitle>
				<Separator />
			</CardHeader>
			<CardContent>
				<ResponsiveContainer width="100%" height={250}>
					<BarChart data={chartData}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis allowDecimals={false} />
						<Tooltip />
						<Bar dataKey="favorites" fill="#22c55e" radius={[4, 4, 0, 0]} />
					</BarChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
};
