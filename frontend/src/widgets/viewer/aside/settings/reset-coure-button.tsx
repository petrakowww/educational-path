'use client';

import { useRemoveCourseMutation } from '@/shared/graphql/generated/output';
import { useState } from 'react';
import {
	Button,
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogCancel,
	AlertDialogAction,
} from '@/shared/ui';
import { toast } from 'sonner';
import { useViewerStore } from '@/shared/managers/store/viewer/view.store';
import { shallow } from 'zustand/shallow';
import { Loader2 } from 'lucide-react';

export const ResetCourseButton = () => {
	const topicMapId = useViewerStore(state => state.topicMapId, shallow);
	const [open, setOpen] = useState(false);
	const [resetting, setResetting] = useState(false);
	const [removeCourseMutation, { loading }] = useRemoveCourseMutation();

	const handleConfirm = async () => {
		if (!topicMapId) {
			toast.error('Ошибка: идентификатор курса не найден');
			return;
		}

		try {
			setResetting(true);
			await removeCourseMutation({
				variables: { topicMapId },
			});
			toast.success('Курс успешно сброшен');
			window.location.reload();
		} catch (error) {
			console.error(error);
			toast.error('Ошибка при удалении курса');
			setResetting(false);
		} finally {
			setOpen(false);
		}
	};

	return (
		<>
			<AlertDialog open={open} onOpenChange={setOpen}>
				<AlertDialogTrigger asChild>
					<Button variant="destructive" className="w-full text-sm h-8">
						Перестать проходить
					</Button>
				</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Вы уверены?</AlertDialogTitle>
						<AlertDialogDescription>
							Это действие удалит весь ваш прогресс. Вы не сможете его восстановить.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Отмена</AlertDialogCancel>
						<AlertDialogAction onClick={handleConfirm} disabled={loading}>
							{loading ? 'Удаление...' : 'Подтвердить'}
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>

			{resetting && (
				<div className="fixed inset-0 z-10 flex items-center justify-cente">
					<div className="flex flex-col items-center gap-4 text-primary">
						<Loader2 className="h-8 w-8 animate-spin" />
						<p className="text-lg font-medium">Пожалуйста, подождите…</p>
					</div>
				</div>
			)}
		</>
	);
};
