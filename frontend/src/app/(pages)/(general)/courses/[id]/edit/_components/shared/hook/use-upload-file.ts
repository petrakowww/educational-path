import { useMutation } from '@tanstack/react-query';
import { api } from '@/shared/api';
import { toast } from 'sonner';

export type UploadFileEndpoint =
	| 'courseImage'
	| 'courseVideo'
	| 'courseAttachment';

interface UploadFileParams {
	file: File;
	endpoint: UploadFileEndpoint;
	courseId: string;
}

interface UploadFileResponse {
	url: string;
	originalFilename: string;
}

export const useUploadFile = () => {
	return useMutation<UploadFileResponse, Error, UploadFileParams>({
		mutationFn: async ({ file, endpoint, courseId }) => {
			const formData = new FormData();
			formData.append('file', file);
			formData.append('endpoint', endpoint);
			formData.append('courseId', courseId);

			const data = await api.post<UploadFileResponse>(
				'/upload',
				formData,
				{
					headers: { 'Content-Type': 'multipart/form-data' },
				}
			);
			return data;
		},
		onError: () => {
			toast.error('Ошибка при загрузке файла');
		},
	});
};
