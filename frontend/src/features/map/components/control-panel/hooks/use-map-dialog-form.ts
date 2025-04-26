import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { CreateRouteDto } from '@/shared/graphql/generated/output';
import {
	CreateRouteSchema,
	formSchema,
} from '../../../schemes/form-scheme-map';

interface UseMapDialogFormProps {
	initialData?: Partial<CreateRouteSchema>;
	onSubmit: (data: CreateRouteDto) => void;
	onOpen: () => void;
	closeAfterSubmit?: boolean;
}

export const useMapDialogForm = (props: UseMapDialogFormProps) => {
	const { initialData, onSubmit, onOpen, closeAfterSubmit = false } = props;
	const [open, setOpen] = useState(false);

	const form = useForm<CreateRouteSchema>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: initialData?.title || '',
			description: initialData?.description ?? '',
			tagIds: initialData?.tagIds,
		},
	});

	const tagIds = form.watch('tagIds') ?? [];

	const handleOpenChange = (isOpen: boolean) => {
        if (isOpen) {
            onOpen();
        }
		setOpen(isOpen);
		if (!isOpen && !initialData) {
			form.reset();
		}
	};

	const handleTagAdd = (tagId: string) => {
		if (tagIds.length >= 5 || tagIds.includes(tagId)) return;
		form.setValue('tagIds', [...tagIds, tagId]);
	};

	const handleTagRemove = (tagId: string) => {
		form.setValue(
			'tagIds',
			tagIds.filter((id) => id !== tagId)
		);
	};

	const handleFormSubmit = (data: CreateRouteSchema) => {
		onSubmit({
			title: data.title,
			description: data.description ?? undefined,
			tagIds: data.tagIds,
		});

		if (closeAfterSubmit) {
			form.reset();
			setOpen(false);
		}
	};

	const closeMapDialog = () => setOpen(false);

	return {
		form,
		open,
		tagIds,
		handleOpenChange,
		handleTagAdd,
		handleTagRemove,
		handleFormSubmit,
		closeMapDialog,
	};
};
