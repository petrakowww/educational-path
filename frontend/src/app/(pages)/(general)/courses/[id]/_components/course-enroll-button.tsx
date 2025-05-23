'use client';

import { useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/shared/ui';
import { useStartCourseMutation } from '@/shared/graphql/generated/output';
import { useRouter } from 'next/navigation';

interface CourseEnrollButtonProps {
	courseId: string;
}

export const CourseEnrollButton = ({
	courseId,
}: CourseEnrollButtonProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const [grantAccess] = useStartCourseMutation();

	const handleEnroll = async () => {
		try {
			setIsLoading(true);
			await grantAccess({
				variables: { id: courseId },
				refetchQueries: ['GetVideoCourse'],
			});
			toast.success('Доступ к курсу предоставлен');
			router.refresh();
		} catch {
			toast.error('Не удалось получить доступ к курсу');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Button
			onClick={handleEnroll}
			disabled={isLoading}
			size="sm"
			className="w-full md:w-auto"
		>
			Начать проходить
		</Button>
	);
};
