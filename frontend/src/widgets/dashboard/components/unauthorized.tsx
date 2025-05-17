'use client';

import Link from 'next/link';
import {
	Separator,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Button,
} from '@/shared/ui';

import { PopularRoutes } from './routes/popular-routes';
import { RecentlyAddedRoutes } from './routes/recently-added-routes';

export const UnauthorizedDashboardView = () => {
	return (
		<div className="space-y-10">
			<section className="space-y-4">
				<h1 className="font-bold text-4xl text-left">
					Добро пожаловать на платформу образовательных карт
				</h1>
				<p className="text-muted-foreground text-lg">
					Визуально формируйте свои маршруты обучения, отслеживайте
					прогресс и находите новые темы для развития.
				</p>
			</section>

			{/* CTA Cards */}
			<section className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto">
				<Card>
					<CardHeader>
						<CardTitle>Регистрация</CardTitle>
						<CardDescription>
							Создайте свой аккаунт и начните формировать
							собственный маршрут.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Button asChild className="w-full">
							<Link href="/auth">Зарегистрироваться</Link>
						</Button>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Поиск маршрутов</CardTitle>
						<CardDescription>
							Изучите существующие маршруты и выберите путь по
							интересующим темам.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Button asChild variant="secondary" className="w-full">
							<Link href="/maps/search">Перейти к поиску</Link>
						</Button>
					</CardContent>
				</Card>
			</section>

			<Separator className="w-full mx-auto" />

			<section className="space-y-8">
				<PopularRoutes />
				<RecentlyAddedRoutes />
			</section>
		</div>
	);
};
