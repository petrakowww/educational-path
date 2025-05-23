'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { ImageIcon, Loader2, PencilIcon, PlusCircleIcon } from 'lucide-react';
import Image from 'next/image';

import {
	Button,
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from '@/shared/ui';

import {
	GetVideoCourseQuery,
	useUpdateCourseImageMutation,
} from '@/shared/graphql/generated/output';
import { staticResources } from '@/shared/lib/utils/public-client';
import { FileUpload } from './shared/file-upload';

interface ImageFormProps {
	course: GetVideoCourseQuery['videoCourse'];
}

export const ImageForm = ({ course }: ImageFormProps) => {
	const { id: courseId, imageUrl } = course;
	const [isEditing, setIsEditing] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const toggleEdit = () => setIsEditing((prev) => !prev);

	const [updateCourseImage] = useUpdateCourseImageMutation();

	const handleUpload = async (url?: string) => {
		if (!url) return;

		try {
			setIsLoading(true);
			console.log(url);
			await updateCourseImage({
				variables: {
					input: {
						courseId,
						imageUrl: url,
					},
				},
			});
			toast.success('Изображение обновлено');
			toggleEdit();
		} catch(error) {
			console.error(error);
			toast.error('Ошибка при обновлении изображения');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Card>
			<CardHeader>
				<div className="flex items-center justify-between">
					<div>
						<CardTitle className="text-base">
							Обложка курса
						</CardTitle>
						<CardDescription>
							Рекомендуемое соотношение сторон — 16:9
						</CardDescription>
					</div>
					<Button size="sm" variant="ghost" onClick={toggleEdit}>
						{isEditing ? (
							'Отмена'
						) : imageUrl ? (
							<>
								<PencilIcon className="w-4 h-4 mr-1" />
								Редактировать
							</>
						) : (
							<>
								<PlusCircleIcon className="w-4 h-4 mr-1" />
								Добавить изображение
							</>
						)}
					</Button>
				</div>
			</CardHeader>
			<CardContent className="pt-0 space-y-4">
				{isEditing ? (
					<div>
						<FileUpload
							endpoint="courseImage"
							courseId={courseId}
							onChange={(url) => handleUpload(url)}
						/>
						<p className="text-xs text-muted-foreground mt-2">
							Выберите изображение для обложки курса.
						</p>
					</div>
				) : imageUrl ? (
					<div className="relative aspect-video rounded-md overflow-hidden border group">
						<Image
							src={
								staticResources.getImageUrl(imageUrl) ??
								'/fallback.jpg'
							}
							alt="Обложка курса"
							fill
							className="object-cover"
						/>
						{isLoading && (
							<div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
								<Loader2 className="h-6 w-6 text-white animate-spin" />
							</div>
						)}
					</div>
				) : (
					<div className="flex items-center justify-center aspect-video bg-muted rounded-md border">
						<ImageIcon className="w-10 h-10 text-muted-foreground" />
					</div>
				)}
			</CardContent>
		</Card>
	);
};
