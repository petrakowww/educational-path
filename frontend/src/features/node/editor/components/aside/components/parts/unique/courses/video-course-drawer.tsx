'use client';

import { Node } from 'reactflow';
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useSaveTopicMapSafely } from '@/widgets/editor/components/save/hooks/use-save-topic-mape-safely';
import {
	useGetVideoCoursesByNodeQuery,
	useCreateVideoCourseMutation,
} from '@/shared/graphql/generated/output';
import Link from 'next/link';
import {
	Button,
	Card,
	CardContent,
	Drawer,
	DrawerContent,
	DrawerTrigger,
	DrawerHeader,
	DrawerTitle,
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	FormControl,
	Input,
	Textarea,
    Separator
} from '@/shared/ui';

interface VideoCourseDrawerProps {
	node: Node;
}

const NewCourseSchema = z.object({
	title: z.string().min(1, 'Название курса не может быть пустым'),
	description: z.string().optional(),
});
type NewCourseFormData = z.infer<typeof NewCourseSchema>;

export const VideoCourseDrawer: React.FC<VideoCourseDrawerProps> = ({
	node,
}) => {
	const { id: topicNodeId } = node;
	const { save } = useSaveTopicMapSafely({
		toastMessages: {
			success: 'Перед добавлением курса карта успешно сохранена!',
			error: 'Не удалось сохранить карту. Курс не добавлен.',
		},
	});

	const { data, loading, error, refetch } = useGetVideoCoursesByNodeQuery({
		variables: { topicNodeId },
	});
	const [createVideoCourse] = useCreateVideoCourseMutation();

	const form = useForm<NewCourseFormData>({
		resolver: zodResolver(NewCourseSchema),
		defaultValues: { title: '', description: '' },
	});

	const [isAdding, setIsAdding] = useState(false);

	const onSubmitNewCourse = async (values: NewCourseFormData) => {
		setIsAdding(true);
		const saved = await save();
		if (!saved) {
			setIsAdding(false);
			return;
		}
		try {
			await createVideoCourse({
				variables: {
					input: {
						topicNodeId,
						title: values.title,
						description: values.description,
					},
				},
			});
			toast.success('Курс успешно добавлен');
			form.reset();
			refetch();
		} catch (err) {
			toast.error('Ошибка добавления курса', {
				description:
					(err as Error).message || 'Не удалось создать курс.',
			});
		} finally {
			setIsAdding(false);
		}
	};

	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="outline">Управление курсами узла</Button>
			</DrawerTrigger>

			<DrawerContent className="p-0 max-h-screen">
				<DrawerHeader>
					<DrawerTitle className='mb-3'>Редактирование курсов узла</DrawerTitle>
                    <Separator/>
				</DrawerHeader>

				<div className="grid grid-cols-4 gap-6 px-6 pb-6 mt-3">
					{/* Левая панель */}
					<div className="col-span-4 md:col-span-1 border-r pr-3">
						<h2 className="text-lg font-semibold mb-4">
							Добавить курс
						</h2>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmitNewCourse)}
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
													placeholder="Название курса"
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
													placeholder="Описание курса"
													className="resize-none h-24"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<Button
									type="submit"
									disabled={isAdding}
									className="w-full"
								>
									{isAdding
										? 'Добавление...'
										: 'Добавить курс'}
								</Button>
							</form>
						</Form>
					</div>

					{/* Правая панель */}
					<div className="col-span-4 md:col-span-3 max-h-[calc(100vh-150px)] overflow-y-auto">
						<h2 className="text-lg font-semibold mb-4">
							Список курсов
						</h2>
						{loading ? (
							<p>Загрузка курсов...</p>
						) : error ? (
							<p className="text-red-500">
								Ошибка загрузки списка курсов.
							</p>
						) : (
							<div className="space-y-4 py-4">
								{data?.videoCoursesByNode?.length ? (
									data.videoCoursesByNode.map((course) => (
										<Card key={course.id}>
											<CardContent className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-4 px-6">
												<div className="flex-1 min-w-0">
													<p className="font-medium break-words">
														{course.title}
													</p>
													{course.description && (
														<p className="text-sm text-muted-foreground mt-1 line-clamp-3 break-words">
															{course.description}
														</p>
													)}
												</div>
												<Button
													variant="outline"
													asChild
													className="shrink-0"
												>
													<Link
														href={`/courses/${course.id}/edit`}
													>
														Редактировать
													</Link>
												</Button>
											</CardContent>
										</Card>
									))
								) : (
									<p className="text-sm text-muted-foreground">
										Курсы отсутствуют.
									</p>
								)}
							</div>
						)}
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	);
};
