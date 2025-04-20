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
	Badge,
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	ButtonProps,
} from '@/shared/ui';

import { XIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import {
	CreateRouteDto,
	TagModel,
	useFindAllTagsLazyQuery,
} from '@/shared/graphql/generated/output';

const formSchema = z.object({
	title: z.string().min(1, 'Название обязательно'),
	description: z.string().nullable().optional(),
	tagIds: z
		.array(z.string().min(1, 'ID тега обязательно'))
		.max(5, 'Не более 5 тегов'),
});

type CreateRouteSchema = z.infer<typeof formSchema>;

interface MapDialogFormProps {
	triggerLabel: string;
	title: string;
	description?: string;
	initialData?: Partial<CreateRouteSchema>;
	onSubmit: (data: CreateRouteDto) => void;
	variant: ButtonProps['variant'];
	selectedTags?: TagModel[];
}

export const MapDialogForm = ({
	triggerLabel,
	title,
	description,
	initialData,
	onSubmit,
	variant,
	selectedTags = [],
}: MapDialogFormProps) => {
	const [fetchTags, { data }] = useFindAllTagsLazyQuery();
	const availableTags = data?.findAllTags ?? [];

	const handleSearchFocus = () => {
		if (!data) fetchTags();
	};

	const form = useForm<CreateRouteSchema>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: initialData?.title || '',
			description: initialData?.description ?? '',
			tagIds: selectedTags.map((tag) => tag.id),
		},
	});

	const [search, setSearch] = useState('');
	const [open, setOpen] = useState(false);
	const tagIds = form.watch('tagIds') ?? [];

	const handleTagAdd = (tag: TagModel) => {
		if (tagIds.length >= 5 || tagIds.includes(tag.id)) return;
		form.setValue('tagIds', [...tagIds, tag.id]);
	};

	const handleTagRemove = (tagId: string) => {
		form.setValue(
			'tagIds',
			tagIds.filter((id) => id !== tagId)
		);
	};

	const handleOpenChange = (isOpen: boolean) => {
		setOpen(isOpen);
		setSearch('');
		if (!isOpen && !initialData) {
			form.reset();
		}
	};

	return (
		<Dialog open={open} onOpenChange={handleOpenChange}>
			<DialogTrigger asChild>
				<Button variant={variant}>{triggerLabel}</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit((data) => {
							onSubmit({
								title: data.title,
								description: data.description ?? undefined,
								tagIds: data.tagIds,
							});
							setOpen(false);
						})}
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
											name={field.name}
											ref={field.ref}
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
										<div className="space-y-2">
											<Command>
												<CommandInput
													placeholder="Поиск тегов..."
													value={search}
													onValueChange={setSearch}
													onFocus={handleSearchFocus}
												/>
												<CommandEmpty>
													Ничего не найдено.
												</CommandEmpty>
												{search && (
													<CommandGroup className="max-h-[120px] overflow-y-auto pr-1">
														{availableTags
															.filter(
																(tag) =>
																	!tagIds.includes(tag.id) &&
																	tag.name
																		.toLowerCase()
																		.includes(
																			search.toLowerCase()
																		)
															)
															.map((tag) => (
																<CommandItem
																	key={tag.id}
																	value={
																		tag.name
																	}
																	onSelect={() =>
																		handleTagAdd(
																			tag
																		)
																	}
																>
																	{tag.name}
																</CommandItem>
															))}
													</CommandGroup>
												)}
											</Command>

											{tagIds.length > 0 && (
												<div className="flex flex-wrap gap-2">
													{tagIds.map((tagId) => {
														const tag =
															availableTags.find(
																(tag) =>
																	tag.id ===
																	tagId
															);
														return tag ? (
															<Badge
																key={tag.id}
																variant="outline"
																className="flex items-center gap-1"
															>
																{tag.name}
																<Button
																	variant="ghost"
																	type="button"
																	onClick={() =>
																		handleTagRemove(
																			tag.id
																		)
																	}
																	className="p-0 h-auto text-destructive hover:text-destructive/80"
																>
																	<XIcon
																		size={
																			12
																		}
																	/>
																</Button>
															</Badge>
														) : null;
													})}
												</div>
											)}
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<DialogFooter className="mt-4 gap-2">
							<Button
								type="button"
								variant="outline"
								onClick={() => setOpen(false)}
							>
								Отмена
							</Button>
							<Button type="submit">Сохранить</Button>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};
