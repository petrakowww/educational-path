'use client';

import { useState } from 'react';
import { Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import {
	useDeleteVideoCourseMutation,
	usePublishVideoCourseMutation,
} from '@/shared/graphql/generated/output';
import { Button } from '@/shared/ui';
import { ConfirmModal } from './shared/confirm-modal';
import { useConfettiStore } from '@/shared/managers/store/courses/confetti.store';
import { AppRoutes } from '@/shared/config';

interface ActionsProps {
	courseId: string;
	isPublished: boolean;
	disabled?: boolean;
}

export const Actions = ({ courseId, isPublished, disabled }: ActionsProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const confetti = useConfettiStore();

	const [publishMutation] = usePublishVideoCourseMutation();
	const [deleteMutation] = useDeleteVideoCourseMutation();

	const handlePublish = async () => {
		try {
			setIsLoading(true);
			await publishMutation({
				variables: { id: courseId },
			});
			toast.success('Курс опубликован');
			confetti.onOpen();
			router.refresh();
		} catch {
			toast.error('Не удалось опубликовать курс');
		} finally {
			setIsLoading(false);
		}
	};

	const handleDelete = async () => {
		try {
			setIsLoading(true);
			await deleteMutation({
				variables: { id: courseId },
			});
			toast.success('Курс удалён');
			router.push(AppRoutes.Maps);
		} catch {
			toast.error('Не удалось удалить курс');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="flex items-center gap-x-2">
			<Button
				variant="outline"
				size="sm"
				onClick={handlePublish}
				disabled={disabled || isLoading || isPublished}
			>
				{isPublished ? 'Опубликован' : 'Опубликовать'}
			</Button>

			<ConfirmModal onConfirm={handleDelete}>
				<Button size="sm" disabled={isLoading} variant="destructive">
					<Trash className="w-4 h-4" />
				</Button>
			</ConfirmModal>
		</div>
	);
};
