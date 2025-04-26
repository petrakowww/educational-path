'use client';

import {
	Button,
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Input,
	Textarea,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	ButtonProps,
} from '@/shared/ui';

import {
	CreateRouteDto,
	FindAllTagsQuery,
} from '@/shared/graphql/generated/output';

import { CreateRouteSchema } from '../../../schemes/form-scheme-map';

import { TagSelector } from './tag-selector';
import { useMapDialogForm } from '../hooks/use-map-dialog-form';

interface MapDialogFormProps {
	triggerLabel: string;
	title: string;
	description?: string;
	initialData?: Partial<CreateRouteSchema>;
	variant: ButtonProps['variant'];
	loading?: boolean;
	allTags?: FindAllTagsQuery;
	tagsLoading?: boolean;
	errorLabel?: string;
	closeAfterSubmit?: boolean;
	onSubmit: (data: CreateRouteDto) => void;
	onOpen: () => void;
}

export const MapDialogForm = (props: MapDialogFormProps) => {
	const {
		triggerLabel,
		title,
		description,
		initialData,
		variant,
		loading = false,
		tagsLoading,
		errorLabel,
		closeAfterSubmit = false,
		allTags,
		onSubmit,
		onOpen,
	} = props;

	const availableTags = allTags?.findAllTags ?? [];

	const {
		form,
		open,
		tagIds,
		handleOpenChange,
		handleTagAdd,
		handleTagRemove,
		handleFormSubmit,
		closeMapDialog,
	} = useMapDialogForm({
		initialData,
		onSubmit,
		onOpen,
		closeAfterSubmit,
	});

	return (
		<Dialog open={open} onOpenChange={handleOpenChange}>
			<DialogTrigger asChild>
				<Button variant={variant} disabled={loading}>
					{triggerLabel}
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(handleFormSubmit)}
						className="space-y-4"
					>
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Название</FormLabel>
									<FormControl>
										<Input
											placeholder="Введите название маршрута"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Описание</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Введите описание маршрута"
											value={field.value ?? ''}
											onChange={field.onChange}
											onBlur={field.onBlur}
											ref={field.ref}
											name={field.name}
											className="resize-y max-h-[200px]"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="tagIds"
							render={() => (
								<FormItem>
									<FormLabel>Теги (до 5 вариантов)</FormLabel>
									<FormControl>
										<TagSelector
											availableTags={availableTags}
											selectedTags={tagIds}
											onTagAdd={handleTagAdd}
											onTagRemove={handleTagRemove}
											tagsLoading={tagsLoading}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{errorLabel && (
							<div className="text-destructive-foreground text-sm mt-2">
								{errorLabel}
							</div>
						)}

						<DialogFooter className="mt-4 gap-2">
							<Button
								type="button"
								variant="outline"
								onClick={closeMapDialog}
								disabled={loading}
							>
								Отмена
							</Button>
							<Button type="submit" disabled={loading}>
								{loading ? 'Сохраняю...' : 'Сохранить'}
							</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};
