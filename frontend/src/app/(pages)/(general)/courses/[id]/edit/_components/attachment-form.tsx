'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { X, File, Loader2, PlusCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/shared/ui';

import {
	useCreateAttachmentMutation,
	useDeleteAttachmentMutation,
} from '@/shared/graphql/generated/output';
import { GetVideoCourseQuery } from '@/shared/graphql/generated/output';
import { FileUpload } from './shared/file-upload';
import { gql, StoreObject } from '@apollo/client';
import { staticResources } from '@/shared/lib/utils/public-client';

interface AttachmentFormProps {
	course: GetVideoCourseQuery['videoCourse'];
}

export const AttachmentForm = ({ course }: AttachmentFormProps) => {
	const { Attachment, id: courseId } = course;
	const router = useRouter();

	const [isEditing, setIsEditing] = useState(false);
	const [deletingId, setDeletingId] = useState<string | null>(null);

	const toggleEdit = () => setIsEditing((prev) => !prev);

	const [createAttachment] = useCreateAttachmentMutation();
	const [deleteAttachment] = useDeleteAttachmentMutation();

	const onDelete = async (id: string) => {
		try {
			setDeletingId(id);
			await deleteAttachment({
				variables: { id },
				update(cache) {
					cache.modify({
						id: cache.identify({
							__typename: 'VideoCourse',
							id: courseId,
						}),
						fields: {
							Attachment(existingRefs = [], { readField }) {
								return existingRefs.filter(
									(ref: StoreObject) =>
										readField('id', ref) !== id
								);
							},
						},
					});
				},
			});
			toast.success('Файл удалён');
			router.refresh();
		} catch {
			toast.error('Не удалось удалить файл');
		} finally {
			setDeletingId(null);
		}
	};

	const onUpload = async (url: string, originalFilename: string) => {
		try {
			await createAttachment({
				variables: {
					input: {
						courseId,
						url,
						name: originalFilename,
					},
				},
				update(cache, { data }) {
					const newAttachment = data?.createAttachment;
					if (!newAttachment) return;

					cache.modify({
						id: cache.identify({
							__typename: 'VideoCourse',
							id: courseId,
						}),
						fields: {
							Attachment(existing = []) {
								const newRef = cache.writeFragment({
									data: newAttachment,
									fragment: gql`
										fragment NewAttachment on Attachment {
											id
											name
											url
										}
									`,
								});
								return [...existing, newRef];
							},
						},
					});
				},
			});
			toast.success('Файл добавлен');
			toggleEdit();
			router.refresh();
		} catch {
			toast.error('Не удалось добавить файл');
		}
	};

	return (
		<Card>
			<CardHeader className="pb-2">
				<CardTitle className="text-base">Вложения</CardTitle>
				<CardDescription>
					Файлы, которые студенты смогут скачать в процессе обучения.
				</CardDescription>
			</CardHeader>
			<CardContent className="pt-0 space-y-4">
				<div className="flex justify-between items-center">
					<p className="text-sm text-muted-foreground">Файлы курса</p>
					<Button variant="ghost" size="sm" onClick={toggleEdit}>
						{isEditing ? (
							'Отмена'
						) : (
							<>
								<PlusCircle className="h-4 w-4 mr-2" />
								Добавить файл
							</>
						)}
					</Button>
				</div>

				{isEditing && (
					<div>
						<FileUpload
							endpoint="courseAttachment"
							courseId={course.id}
							onChange={onUpload}
						/>
						<p className="text-xs text-muted-foreground mt-2">
							Добавьте материалы, необходимые для прохождения
							курса.
						</p>
					</div>
				)}

				{!isEditing && (
					<div className="space-y-2">
						{Attachment && Attachment.length === 0 ? (
							<p className="text-sm italic text-muted-foreground">
								Вложения отсутствуют
							</p>
						) : (
							Attachment?.map((attachment) => (
								<div
									key={attachment.id}
									className="flex items-center p-3 w-full rounded-md border border-primary/20 bg-primary/10 text-primary dark:bg-primary/10 dark:border-primary/30 dark:text-primary"
								>
									<File className="h-4 w-4 mr-2 flex-shrink-0" />
									<a
										href={staticResources.getAttachmentUrl(attachment.url)}
										target="_blank"
										rel="noopener noreferrer"
										className="text-xs line-clamp-1 hover:underline"
									>
										{attachment.name}
									</a>
									{deletingId === attachment.id ? (
										<Loader2 className="h-4 w-4 ml-auto animate-spin" />
									) : (
										<button
											title="Удалить"
											onClick={() =>
												onDelete(attachment.id)
											}
											className="ml-auto hover:opacity-75 transition"
										>
											<X className="h-4 w-4" />
										</button>
									)}
								</div>
							))
						)}
					</div>
				)}
			</CardContent>
		</Card>
	);
};
