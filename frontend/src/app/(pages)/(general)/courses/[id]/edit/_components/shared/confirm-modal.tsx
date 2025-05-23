'use client';

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/shared/ui';
import { ReactNode, useState } from 'react';

interface ConfirmModalProps {
	children: ReactNode;
	onConfirm: () => void;
	title?: string;
	description?: string;
}

export const ConfirmModal = ({
	children,
	onConfirm,
	title = 'Вы уверены?',
	description = 'Это действие нельзя отменить. Продолжить?',
}: ConfirmModalProps) => {
	const [open, setOpen] = useState(false);

	const handleConfirm = () => {
		onConfirm();
		setOpen(false);
	};

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>{title}</AlertDialogTitle>
					<AlertDialogDescription>{description}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Отмена</AlertDialogCancel>
					<AlertDialogAction onClick={handleConfirm}>
						Подтвердить
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};
