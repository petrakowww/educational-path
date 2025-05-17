'use client';

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	Badge,
	Button,
} from '@/shared/ui';
import Link from 'next/link';
import Image from 'next/image';
import { PlayIcon } from 'lucide-react';

type MockVideoCourse = {
	id: string;
	title: string;
	description?: string;
	imageUrl?: string;
	favoritesCount: number;
	isPublished: boolean;
};

const mockVideoCourses: MockVideoCourse[] = [
	{
		id: 'v1',
		title: 'TypeScript с нуля',
		description: 'Погружение в строгую типизацию и работу с интерфейсами.',
		imageUrl: 'https://placehold.co/400x200/green/white?text=TS',
		favoritesCount: 112,
		isPublished: true,
	},
	{
		id: 'v2',
		title: 'React + Hooks',
		description: 'Современная разработка компонентов и состояние с hooks.',
		imageUrl: 'https://placehold.co/400x200/blue/white?text=React',
		favoritesCount: 94,
		isPublished: true,
	},
	{
		id: 'v3',
		title: 'Алгоритмы: основы',
		description: 'Разбор базовых алгоритмов и структур данных.',
		imageUrl: 'https://placehold.co/400x200/orange/white?text=Algo',
		favoritesCount: 78,
		isPublished: true,
	},
];

export const PopularVideoCourses = () => {
	return (
		<section className="space-y-6">
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-semibold flex items-center gap-2">
					<PlayIcon className="w-5 h-5 text-primary" />
					Популярные видеокурсы
				</h2>
				<Button variant="link" asChild>
					<Link href="/courses">Смотреть все</Link>
				</Button>
			</div>

			{mockVideoCourses.length > 0 ? (
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{mockVideoCourses.map((course) => (
						<Card
							key={course.id}
							className="overflow-hidden flex flex-col"
						>
							{course.imageUrl && (
								<Image
									src={course.imageUrl}
									alt={course.title}
									width={400}
									height={200}
									className="w-full h-40 object-cover"
								/>
							)}
							<CardHeader className="flex-1 space-y-1">
								<CardTitle className="line-clamp-1 text-base">
									{course.title}
								</CardTitle>
								<p className="text-sm text-muted-foreground line-clamp-2">
									{course.description || 'Без описания'}
								</p>
							</CardHeader>
							<CardContent className="flex items-center justify-between border-t pt-2">
								<Badge variant="outline">
									❤ {course.favoritesCount} добавлений
								</Badge>
								<Button size="sm" asChild variant="secondary">
									<Link href={`/courses/${course.id}`}>
										Открыть
									</Link>
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			) : (
				<div className="text-muted-foreground text-sm border border-border p-4 rounded-md">
					Популярные видеокурсы пока не найдены. Проверьте позже.
				</div>
			)}
		</section>
	);
};
