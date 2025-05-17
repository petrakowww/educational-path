'use client';

import { Button } from '@/shared/ui';
import { GraduationCap, LogInIcon } from 'lucide-react';
import Link from 'next/link';

interface DashboardHeaderProps {
	isAuthenticated: boolean;
	name?: string;
}

export const DashboardHeader = ({ isAuthenticated, name }: DashboardHeaderProps) => {
	return (
		<div className="rounded-lg border bg-background p-6 shadow-sm space-y-3">
			<div className="flex items-center gap-3">
				<GraduationCap className="w-6 h-6 text-primary" />
				<h1 className="text-2xl font-bold tracking-tight">
					{isAuthenticated
						? `Добро пожаловать, ${name || 'пользователь'}`
						: 'Добро пожаловать на образовательную платформу'}
				</h1>
			</div>

			<p className="text-muted-foreground text-sm max-w-2xl">
				{isAuthenticated
					? 'Вы можете продолжить обучение, просматривать добавленные маршруты, отслеживать прогресс или создавать собственные образовательные траектории.'
					: 'Эта платформа позволяет изучать материалы в интерактивной форме, строить индивидуальные маршруты и следить за прогрессом обучения. Создайте аккаунт и начните обучение уже сегодня.'}
			</p>

			{!isAuthenticated && (
				<Button asChild className="mt-3">
					<Link href="/auth/signin" className="flex items-center gap-2">
						<LogInIcon className="w-4 h-4" />
						Войти в аккаунт
					</Link>
				</Button>
			)}
		</div>
	);
};
