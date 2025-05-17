'use client';

import {
	Badge,
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from '@/shared/ui';
import { Route } from '@/shared/managers/store/maps/filters.store';

interface RouteCardProps {
	route: Route;
	layout: 'grid' | 'list';
}

export const RouteCard = ({ route, layout }: RouteCardProps) => {
	return (
		<Card
			className={
				layout === 'list' ? 'flex flex-row items-center p-4' : ''
			}
		>
			{/* Header with title and author */}
			<CardHeader className={layout === 'list' ? 'w-1/3' : ''}>
				<CardTitle>{route.title}</CardTitle>
				<CardDescription>By {route.author}</CardDescription>
			</CardHeader>

			{/* Content with tags and attributes */}
			<CardContent>
				<div className="flex flex-wrap items-center gap-2 text-sm">
					{route.tags.map((tag) => (
						<Badge key={tag} variant="secondary">
							{tag}
						</Badge>
					))}
					{route.isVerified && (
						<Badge variant="outline">Verified</Badge>
					)}
					{route.hasVideo && <Badge variant="outline">Video</Badge>}
					<Badge variant="outline">{route.type}</Badge>
					<Badge variant="outline">{route.topicsCount} topics</Badge>
				</div>
			</CardContent>

			{/* Footer with creation date or other info */}
			<CardFooter>
				<p className="text-xs text-muted-foreground">
					Created {route.createdAt.toDateString()}
				</p>
			</CardFooter>
		</Card>
	);
};
