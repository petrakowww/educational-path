'use client';

import { useVerificationMutation } from '../../hooks/use-verification-mutation';
import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Button, Card, CardContent } from '@/shared/ui';
import { useRouter } from 'next/navigation';
import { AppRoutes } from '@/shared/config';

export const FormVerifyEmail = () => {
	const { verification } = useVerificationMutation();
	const router = useRouter();
	const [isVerifying, setIsVerifying] = useState(true);
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		verification()
			.then(() => setSuccess(true))
			.catch(() => setSuccess(false))
			.finally(() => setIsVerifying(false));
	}, [verification]);

	return (
		<Card className="w-full max-w-md mx-auto p-6 text-center">
			<CardContent className="p-0">
				{isVerifying ? (
					<div className="flex flex-col items-center gap-4">
						<Loader2 className="w-6 h-6 animate-spin" />
						<p>Пожалуйста, подождите, идет проверка вашего email...</p>
					</div>
				) : success ? (
					<div className="flex flex-col gap-4">
						<p>Ваш email был успешно подтвержден.</p>
						<Button
							onClick={() => router.replace(AppRoutes.Dashboard)}
						>
							Перейти в панель управления
						</Button>
					</div>
				) : (
					<div className="flex flex-col gap-4">
						<p>Ошибка при проверке email. Пожалуйста, попробуйте снова.</p>
						<Button
							onClick={() => router.replace(AppRoutes.SignIn)}
							variant="destructive"
						>
							Перейти к входу
						</Button>
					</div>
				)}
			</CardContent>
		</Card>
	);
};
