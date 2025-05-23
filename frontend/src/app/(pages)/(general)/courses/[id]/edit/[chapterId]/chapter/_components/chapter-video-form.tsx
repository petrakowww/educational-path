'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { PencilIcon, PlusCircleIcon, VideoIcon, Loader2 } from 'lucide-react';

import {
	Button,
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from '@/shared/ui';

import { FileUpload } from '../../../_components/shared/file-upload';
import { useUpdateVideoChapterMutation } from '@/shared/graphql/generated/output';
import { staticResources } from '@/shared/lib/utils/public-client';

interface ChapterVideoFormProps {
	chapter: {
		id: string;
		videoUrl?: string | null;
	};
}

export const ChapterVideoForm = ({ chapter }: ChapterVideoFormProps) => {
	const { id: chapterId, videoUrl } = chapter;

	const [isEditing, setIsEditing] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const toggleEdit = () => setIsEditing((prev) => !prev);
	const [updateChapter] = useUpdateVideoChapterMutation();

	const handleUpload = async (url?: string) => {
		if (!url) return;

		try {
			setIsLoading(true);
			await updateChapter({
				variables: {
					input: {
						id: chapterId,
						videoUrl: url,
					},
				},
			});
			toast.success('Видео обновлено');
			toggleEdit();
		} catch {
			toast.error('Ошибка при обновлении видео');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Card>
			<CardHeader>
				<div className="flex items-center justify-between">
					<div>
						<CardTitle className="text-base">Видео главы</CardTitle>
						<CardDescription>
							Загрузите видеоурок, связанный с этой главой
						</CardDescription>
					</div>
					<Button size="sm" variant="ghost" onClick={toggleEdit}>
						{isEditing ? (
							'Отмена'
						) : videoUrl ? (
							<>
								<PencilIcon className="w-4 h-4 mr-1" />
								Редактировать
							</>
						) : (
							<>
								<PlusCircleIcon className="w-4 h-4 mr-1" />
								Добавить
							</>
						)}
					</Button>
				</div>
			</CardHeader>

			<CardContent className="pt-0 space-y-4">
				{isEditing ? (
					<div>
						<FileUpload
							endpoint="courseVideo"
							courseId={chapterId}
							onChange={(url) => handleUpload(url)}
						/>
						<p className="text-xs text-muted-foreground mt-2">
							Загрузите видеоурок. Поддерживаются форматы .mp4 и .mov
						</p>
					</div>
				) : videoUrl ? (
					<div className="relative aspect-video rounded-md overflow-hidden border">
						<video
							controls
							className="w-full h-full object-cover"
							src={staticResources.getVideoUrl(videoUrl)}
						/>
						{isLoading && (
							<div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
								<Loader2 className="h-6 w-6 text-white animate-spin" />
							</div>
						)}
						<p className="text-xs text-muted-foreground mt-2">
							Если видео не воспроизводится, убедитесь, что файл загружен корректно и поддерживается браузером.
						</p>
					</div>
				) : (
					<div className="flex items-center justify-center aspect-video bg-muted rounded-md border">
						<VideoIcon className="w-10 h-10 text-muted-foreground" />
					</div>
				)}
			</CardContent>
		</Card>
	);
};
