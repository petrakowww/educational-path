'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { TrashIcon } from 'lucide-react';
import { toast } from 'sonner';

import {
	Button,
} from '@/shared/ui';

import {
	usePublishVideoChapterMutation,
	useUnpublishVideoChapterMutation,
	useDeleteVideoChapterMutation,
} from '@/shared/graphql/generated/output';
import { ConfirmModal } from '../../../_components/shared/confirm-modal';

interface ChapterActionsProps {
	chapterId: string;
	courseId: string;
	isPublished: boolean;
    disabled: boolean;
}

export const ChapterActions = ({
	chapterId,
	courseId,
	isPublished,
    disabled
}: ChapterActionsProps) => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const [publishChapter] = usePublishVideoChapterMutation();
	const [unpublishChapter] = useUnpublishVideoChapterMutation();
	const [deleteChapter] = useDeleteVideoChapterMutation();

	const handlePublishToggle = async () => {
		setLoading(true);
		try {
			if (isPublished) {
				await unpublishChapter({ variables: { id: chapterId } });
				toast.success('Глава снята с публикации');
			} else {
				await publishChapter({ variables: { id: chapterId } });
				toast.success('Глава опубликована');
			}
			router.refresh();
		} catch {
			toast.error('Ошибка при обновлении публикации');
		} finally {
			setLoading(false);
		}
	};

	const handleDelete = async () => {
		setLoading(true);
		try {
			await deleteChapter({ variables: { id: chapterId } });
			toast.success('Глава удалена');
			router.push(`/courses/${courseId}/edit`);
			router.refresh();
		} catch {
			toast.error('Ошибка при удалении главы');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex items-center gap-2">
			<Button
				variant="outline"
				size="sm"
				disabled={loading || disabled}
				onClick={handlePublishToggle}
			>
				{isPublished ? 'Снять с публикации' : 'Опубликовать'}
			</Button>

			<ConfirmModal
				onConfirm={handleDelete}
				description="Это действие удалит главу без возможности восстановления. Продолжить?"
			>
				<Button variant="destructive" size="sm" disabled={loading || disabled}>
					<TrashIcon />
				</Button>
			</ConfirmModal>
		</div>
	);
};
