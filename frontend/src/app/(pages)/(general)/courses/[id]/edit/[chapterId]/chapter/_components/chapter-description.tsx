'use client';

import { useState } from 'react';
import { PencilIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/shared/ui';

import { useUpdateVideoChapterMutation } from '@/shared/graphql/generated/output';
import { toast } from 'sonner';
import { ViewerEditor } from '@/widgets/viewer/content-menu/components/tiptap-content';
import { TipTapEditorVideoCourse } from '@/shared/ui/tiptap/components/video-course-editor';

const formSchema = z.object({
	description: z.string().min(1, { message: 'Описание не должно быть пустым' }),
});

interface ChapterDescriptionFormProps {
	chapter: {
		id: string;
		description?: string | null;
	};
}

export const ChapterDescriptionForm = ({ chapter }: ChapterDescriptionFormProps) => {
	const [isEditing, setIsEditing] = useState(false);
	const toggleEdit = () => setIsEditing(prev => !prev);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			description: chapter.description ?? '',
		},
	});

	const [updateChapter, { loading }] = useUpdateVideoChapterMutation();

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			await updateChapter({
				variables: {
					input: {
						id: chapter.id,
						description: values.description,
					},
				},
			});
			toast.success('Описание обновлено');
			toggleEdit();
		} catch {
			toast.error('Ошибка при обновлении описания');
		}
	};

	return (
		<Card>
			<CardHeader className="pb-2">
				<CardTitle className="text-base">Описание главы</CardTitle>
				<CardDescription>Добавьте описание содержания главы</CardDescription>
			</CardHeader>
			<CardContent className="pt-0">
				{isEditing ? (
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
							<FormField
								control={form.control}
								name="description"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<TipTapEditorVideoCourse value={field.value} onChange={field.onChange} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className="flex items-center gap-2">
								<Button type="submit" disabled={!form.formState.isValid || loading}>
									Сохранить
								</Button>
								<Button variant="ghost" type="button" onClick={toggleEdit}>
									Отмена
								</Button>
							</div>
						</form>
					</Form>
				) : (
					<div className="text-sm">
						{chapter.description ? (
							<ViewerEditor content={chapter.description} />
						) : (
							<p className="italic text-muted-foreground">Описание отсутствует</p>
						)}
						<div className="mt-2">
							<Button size="sm" variant="ghost" onClick={toggleEdit}>
								<PencilIcon className="w-4 h-4 mr-1" />
								Редактировать
							</Button>
						</div>
					</div>
				)}
			</CardContent>
		</Card>
	);
};
