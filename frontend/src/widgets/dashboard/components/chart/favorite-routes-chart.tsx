'use client';

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Separator,
} from '@/shared/ui';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';

const mockFavoritesData = [
	{ name: 'Фронтенд', favorites: 12 },
	{ name: 'React', favorites: 18 },
	{ name: 'Алгоритмы', favorites: 9 },
	{ name: 'SQL', favorites: 7 },
];

export const FavoriteRoutesChart = () => (
	<Card>
		<CardHeader>
			<CardTitle className="text-base">Избранные маршруты</CardTitle>
			<Separator />
		</CardHeader>
		<CardContent>
			<ResponsiveContainer width="100%" height={250}>
				<BarChart data={mockFavoritesData}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis allowDecimals={false} />
					<Tooltip />
					<Bar
						dataKey="favorites"
						fill="#22c55e"
						radius={[4, 4, 0, 0]}
					/>
				</BarChart>
			</ResponsiveContainer>
		</CardContent>
	</Card>
);
