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
	Button,
	Textarea,
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from '@/shared/ui';

import {
	GetVideoCourseQuery,
	useUpdateVideoCourseMutation,
} from '@/shared/graphql/generated/output';
import { toast } from 'sonner';

const formSchema = z.object({
	description: z.string().min(1, { message: 'Описание обязательно' }),
});

interface DescriptionFormProps {
	course: GetVideoCourseQuery['videoCourse'];
}

export const DescriptionForm = ({ course }: DescriptionFormProps) => {
	const { description: initialDescription, id: courseId } = course;
	const [isEditing, setIsEditing] = useState(false);
	const toggleEdit = () => setIsEditing((prev) => !prev);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			description: initialDescription ?? '',
		},
	});

	const [updateCourse, { loading }] = useUpdateVideoCourseMutation();

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			await updateCourse({
				variables: {
					input: {
						id: courseId,
						description: values.description,
					},
				},
			});
			toast.success('Описание обновлено');
			toggleEdit();
		} catch {
			toast.error('Не удалось обновить описание');
		}
	};

	return (
		<Card>
			<CardHeader className="pb-2">
				<CardTitle className="text-base">Описание</CardTitle>
				<CardDescription>
					Укажите краткое описание курса — это поможет студентам понять, чему они научатся.
				</CardDescription>
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
											<Textarea
												rows={5}
												placeholder="Введите описание курса"
												{...field}
												disabled={loading}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className="flex items-center gap-2">
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
							</div>
						</form>
					</Form>
				) : (
					<div className="flex items-center justify-between border rounded-md p-3">
						<p className="text-sm text-muted-foreground whitespace-pre-line flex-1">
							{initialDescription || 'Описание отсутствует'}
						</p>
						<Button
							size="sm"
							variant="ghost"
							onClick={toggleEdit}
							className="ml-4 shrink-0"
						>
							<PencilIcon className="w-4 h-4 mr-1" />
							Редактировать
						</Button>
					</div>
				)}
			</CardContent>
		</Card>
	);
};
