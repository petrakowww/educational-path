'use client';

import {
	Route,
	VerificationStatus,
	PrivateType,
} from '@/shared/graphql/generated/output';
import {
	Badge,
	Card,
	Avatar,
	AvatarFallback,
	AvatarImage,
	Button,
} from '@/shared/ui';
import { cn } from '@/shared/lib';
import Link from 'next/link';

interface RouteCardProps {
	route: Route;
	layout: 'grid' | 'list';
}

export const RouteCard = ({ route, layout }: RouteCardProps) => {
	const isVerified = route.isVerified === VerificationStatus.Verified;
	const isPrivate = route.privateType === PrivateType.Private;
	const createdAt = new Date(route.createdAt).toLocaleDateString('ru-RU');

	const hasVideo =
		route.topicMap?.nodes?.some((node) => node.videoCourses?.length) ?? false;

	const slug = route.title;

	return (
		<Card
			className={cn(
				'border',
				layout === 'list'
					? 'flex gap-4 p-4 items-start'
					: 'p-4 flex flex-col justify-between min-h-[240px]'
			)}
		>
			{/* Аватар в list */}
			{layout === 'list' && (
				<div className="flex-shrink-0">
					<Avatar className="w-12 h-12">
						<AvatarImage
							src={route.user.avatar || ''}
							alt={route.user.name}
						/>
						<AvatarFallback>{route.user.name[0]}</AvatarFallback>
					</Avatar>
				</div>
			)}

			{/* Контент */}
			<div className="flex flex-col w-full gap-2 flex-1">
				{/* Заголовок + автор */}
				<div>
					<h3 className="text-lg font-semibold leading-tight line-clamp-1">
						{route.title}
					</h3>
					<p className="text-sm text-muted-foreground">
						Автор: {route.user.name}
					</p>
				</div>

				{/* Метки */}
				<div className="flex flex-wrap gap-2 text-sm max-h-[64px] overflow-hidden">
					{route.tags?.map((tag) => (
						<Badge key={tag.id} variant="secondary">
							{tag.tag?.name}
						</Badge>
					))}
					{isVerified && <Badge variant="outline">Верифицирован</Badge>}
					{hasVideo && <Badge variant="outline">Видео</Badge>}
					<Badge variant="outline">
						{isPrivate ? 'Приватный' : 'Публичный'}
					</Badge>
					<Badge variant="outline">{route.topicCount} тем</Badge>
				</div>

				{/* Нижний блок */}
				<div
					className={cn(
						'flex items-center justify-between gap-2 mt-auto',
						layout === 'list' ? 'pt-2' : 'pt-4'
					)}
				>
					<p className="text-xs text-muted-foreground">
						Создан: {createdAt}
					</p>
					{slug && (
						<Button asChild size="sm" variant="secondary">
							<Link href={`/viewer/${route.id}/${slug}`}>Перейти</Link>
						</Button>
					)}
				</div>
			</div>
		</Card>
	);
};
