'use client';

import { UploadCloud } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import { useCallback } from 'react';
import { toast } from 'sonner';
import { useUploadFile, UploadFileEndpoint} from './hook/use-upload-file';

interface FileUploadProps {
	onChange: (url: string, originalFilename: string) => void;
	endpoint: UploadFileEndpoint;
	courseId: string;
}

export const FileUpload = ({ onChange, endpoint, courseId }: FileUploadProps) => {
	const { mutateAsync } = useUploadFile();

	const onDrop = useCallback(
		async (acceptedFiles: File[]) => {
			const file = acceptedFiles[0];
			if (!file) return;

			try {
				const data = await mutateAsync({ file, endpoint, courseId });
				onChange(data.url, data.originalFilename);
				toast.success('Файл успешно загружен');
			} catch (err) {
				console.error(err);
			}
		},
		[mutateAsync, onChange, endpoint, courseId]
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		maxFiles: 1,
	});

	return (
		<div
			{...getRootProps()}
			className="flex flex-col items-center justify-center w-full h-48 border border-dashed border-muted rounded-md cursor-pointer hover:bg-muted/40 transition"
		>
			<input {...getInputProps()} />
			<UploadCloud className="w-8 h-8 text-muted-foreground mb-2" />
			<p className="text-sm text-muted-foreground">
				{isDragActive ? 'Отпустите файл, чтобы загрузить' : 'Перетащите файл сюда или нажмите для выбора'}
			</p>
		</div>
	);
};
