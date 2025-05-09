import { useEdgeStore } from '@/shared/managers/store/editor/edge-editor.store';
import { useNodeStore } from '@/shared/managers/store/editor/nodes-editor.store';
import { Button } from '@/shared/ui';
import { Save, Loader2 } from 'lucide-react';
import React from 'react';
import { useSaveTopicMapMutation } from '@/shared/graphql/generated/output';
import { toast } from 'sonner';
import { useParams } from 'next/navigation';
import { transformNodesAndEdgesForMutation } from './utils';

interface ButtonWidgetSaveRoadmapProps {
	onSave?: () => void;
	isLoading?: boolean;
	disabled?: boolean;
}

export const SaveRoadmap = ({
	onSave,
	isLoading = false,
	disabled = false,
}: ButtonWidgetSaveRoadmapProps) => {
	const params = useParams<{ id: string }>();
	const routeId = params?.id;

	const { nodesList } = useNodeStore((state) => ({
		nodesList: state.nodesList,
	}));
	const { edgeList } = useEdgeStore((state) => ({ edgeList: state.edges }));
	const [saveTopicMap, { loading }] = useSaveTopicMapMutation();
	console.log(nodesList, edgeList);
	const handleSave = async () => {
		if (!routeId) return;

		const input = transformNodesAndEdgesForMutation(
			routeId,
			nodesList,
			edgeList
		);

		try {
			await saveTopicMap({ variables: { input } });

			toast.success(`Карта успешно сохранена!`, {
				description: `Маршрут "${routeId}" с ${nodesList.length} узлами.`,
			});

			onSave?.();
		} catch (err) {
			console.error('Ошибка при сохранении карты:', err);
			toast.error('Произошла ошибка при сохранении. Попробуйте снова.');
		}
	};

	return (
		<Button
			onClick={handleSave}
			disabled={disabled || isLoading || loading}
			className="h-full rounded-md w-full [&_svg]:size-5"
		>
			{loading ? <Loader2 className="animate-spin w-4 h-4" /> : <Save />}
			<span className="ml-2">Сохранить карту</span>
		</Button>
	);
};
