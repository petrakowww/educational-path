import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui';
import { ListIcon, LockIcon, GlobeIcon } from 'lucide-react';
import React from 'react';

interface IStatCard {
	title: string;
	value: number;
	Icon: React.ElementType;
}

export const StatCard = (props: IStatCard) => {
	const { title, value, Icon } = props;
	return (
		<div className="flex items-center gap-4 w-full">
			<div className="flex-shrink-0">
				<Icon className="text-primary" size={32} />
			</div>
			<div className="flex flex-col min-w-0">
				<span className="text-sm text-muted-foreground truncate">
					{title}
				</span>
				<span className="text-xl font-bold">{value}</span>
			</div>
		</div>
	);
};

interface IRouteStatsCard {
	totalRoutes: number;
	totalPrivate: number;
	totalPublic: number;
}

const cards = [
	{
		title: 'Всего маршрутов',
		Icon: ListIcon,
		value: (props: IRouteStatsCard) => props.totalRoutes,
	},
	{
		title: 'Приватных',
		Icon: LockIcon,
		value: (props: IRouteStatsCard) => props.totalPrivate,
	},
	{
		title: 'Публичных',
		Icon: GlobeIcon,
		value: (props: IRouteStatsCard) => props.totalPublic,
	},
];

export const RouteStatsCard = (props: IRouteStatsCard) => {
	return (
		<Card className="w-full container">
			<CardHeader>
				<CardTitle>Статистика маршрутов</CardTitle>
			</CardHeader>
			<CardContent className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-1 gap-4">
				{cards.map((card, index) => (
					<StatCard
						key={index}
						title={card.title}
						value={card.value(props)}
						Icon={card.Icon}
					/>
				))}
			</CardContent>
		</Card>
	);
};

