import { useEdgeStore } from '@/shared/managers/store/editor/edge-editor.store';
import { useNodeStore } from '@/shared/managers/store/editor/nodes-editor.store';
import { useSaveTopicMapMutation } from '@/shared/graphql/generated/output';
import { useParams } from 'next/navigation';
import { toast } from 'sonner';
import { transformNodesAndEdgesForMutation } from '../utils';

interface UseSaveMapOptions {
	toastMessages?: {
		success?: string;
		error?: string;
	};
	offToast?: boolean;
}

export const useSaveTopicMapSafely = (options?: UseSaveMapOptions) => {
	const { toastMessages, offToast } = options || {};
	const params = useParams<{ id: string }>();
	const routeId = params?.id;

	const { nodesList } = useNodeStore();
	const { edges } = useEdgeStore();
	const [saveTopicMap, { loading }] = useSaveTopicMapMutation();

	const save = async (): Promise<boolean> => {
		if (!routeId) return false;

		const input = transformNodesAndEdgesForMutation(routeId, nodesList, edges);

		try {
			await saveTopicMap({ variables: { input } });

			if (!offToast) {
				toast.success(toastMessages?.success ?? 'Карта успешно сохранена!', {
					description: `Маршрут "${routeId}" с ${nodesList.length} узлами.`,
				});
			}

			return true;
		} catch (err) {
			console.error('Ошибка при сохранении карты:', err);

			if (!offToast) {
				toast.error(toastMessages?.error ?? 'Произошла ошибка при сохранении карты.');
			}

			return false;
		}
	};

	return { save, loading };
};
