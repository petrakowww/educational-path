'use client';

import { PlusCircle } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import {
	Button,
	Input,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/shared/ui';

import { ChaptersList } from './shared/chapter-list';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { gql } from '@apollo/client';

import {
	GetVideoCourseQuery,
	useCreateVideoChapterMutation,
	useReorderVideoChaptersMutation,
} from '@/shared/graphql/generated/output';
const formSchema = z.object({
	title: z.string().min(1, 'Введите название главы'),
});

interface ChaptersFormProps {
	course: GetVideoCourseQuery['videoCourse'];
}

export const ChaptersForm = ({ course }: ChaptersFormProps) => {
	const { id: courseId, chapters } = course;
	const [isCreating, setIsCreating] = useState(false);

	const [createChapter] = useCreateVideoChapterMutation();
	const [reorderChapters] = useReorderVideoChaptersMutation();

	const toggleCreating = () => setIsCreating((prev) => !prev);

	const router = useRouter();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: '',
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			await createChapter({
				variables: {
					input: {
						courseId,
						title: values.title,
					},
				},
				update: (cache, { data }) => {
					const newChapter = data?.createVideoChapter;
					if (!newChapter) return;

					cache.modify({
						id: cache.identify({
							__typename: 'VideoCourse',
							id: courseId,
						}),
						fields: {
							chapters(existingChapters = []) {
								const newRef = cache.writeFragment({
									data: newChapter,
									fragment: gql`
										fragment NewChapter on VideoChapter {
											id
											title
											description
											position
											isFree
											isPublished
											videoUrl
										}
									`,
								});

								return [...existingChapters, newRef];
							},
						},
					});
				},
			});
			toast.success('Глава создана');
			toggleCreating();
			router.refresh();
		} catch {
			toast.error('Не удалось создать главу');
		}
	};

	const handleEditChapter = (chapterId: string) => {
		router.push(`/courses/${courseId}/edit/${chapterId}/chapter`);
	};

	const onReorder = async (
		updateData: { id: string; position: number }[]
	) => {
		try {
			await reorderChapters({
				variables: {
					input: {
						courseId,
						chapters: updateData,
					},
				},
			});
			toast.success('Порядок глав обновлён');
			router.refresh();
		} catch {
			toast.error('Не удалось обновить порядок');
		}
	};

	return (
		<div className="border bg-muted rounded-md p-4 relative">
			<div className="font-medium flex items-center justify-between">
				Главы курса
				<Button onClick={toggleCreating} variant="ghost" size="sm">
					{isCreating ? (
						'Отмена'
					) : (
						<>
							<PlusCircle className="h-4 w-4 mr-2" />
							Добавить
						</>
					)}
				</Button>
			</div>

			{isCreating && (
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-4 mt-4"
					>
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											placeholder="Название главы..."
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button
							disabled={form.formState.isSubmitting}
							type="submit"
						>
							Создать
						</Button>
					</form>
				</Form>
			)}

			{!isCreating && (
				<div className="mt-4">
					{chapters.length === 0 ? (
						<p className="text-sm text-muted-foreground italic">
							Глав пока нет
						</p>
					) : (
						<ChaptersList
							onEditChapter={handleEditChapter}
							items={chapters}
							onReorder={onReorder}
						/>
					)}
				</div>
			)}

			{!isCreating && chapters.length > 0 && (
				<p className="text-xs text-muted-foreground mt-4">
					Перетащите главы для изменения порядка
				</p>
			)}
		</div>
	);
};
