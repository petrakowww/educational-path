'use client';

import { useState } from 'react';
import { PencilIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardDescription,
	Button,
	Input,
} from '@/shared/ui';

import { GetVideoCourseQuery, useUpdateVideoCourseMutation } from '@/shared/graphql/generated/output';
import { toast } from 'sonner';

interface TitleFormProps {
	course: GetVideoCourseQuery['videoCourse'];
}

const formSchema = z.object({
	title: z.string().min(1, { message: 'Укажите название курса' }),
});

export const TitleForm = ({ course }: TitleFormProps) => {
	const { title: initialTitle, id: courseId } = course;
	const [isEditing, setIsEditing] = useState(false);
	const toggleEdit = () => setIsEditing(prev => !prev);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: initialTitle,
		},
	});

	const [updateCourse, { loading }] = useUpdateVideoCourseMutation();

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			await updateCourse({
				variables: {
					input: {
						id: courseId,
						title: values.title,
					},
				},
			});
			toast.success('Название обновлено');
			toggleEdit();
		} catch {
			toast.error('Ошибка при обновлении названия');
		}
	};

	return (
		<Card>
			<CardHeader className="pb-2">
				<CardTitle className="text-base">Название</CardTitle>
				<CardDescription>Укажите краткое и понятное название курса</CardDescription>
			</CardHeader>
			<CardContent className="pt-0">
				{isEditing ? (
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-2">
							<FormField
								control={form.control}
								name="title"
								render={({ field }) => (
									<FormItem className="flex-1">
										<FormControl>
											<Input
												placeholder="Введите название курса"
												{...field}
												disabled={loading}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button
								type="submit"
								size="sm"
								disabled={loading || !form.formState.isValid}
							>
								Сохранить
							</Button>
							<Button
								type="button"
								variant="ghost"
								size="sm"
								onClick={toggleEdit}
							>
								Отмена
							</Button>
						</form>
					</Form>
				) : (
					<div className="flex items-center justify-between p-3 border rounded-md text-sm">
						<p>{initialTitle || 'Без названия'}</p>
						<Button size="sm" variant="ghost" onClick={toggleEdit}>
							<PencilIcon className="w-4 h-4 mr-1" />
							Редактировать
						</Button>
					</div>
				)}
			</CardContent>
		</Card>
	);
};
