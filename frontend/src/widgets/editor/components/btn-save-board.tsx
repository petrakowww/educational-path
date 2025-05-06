import { useEdgeStore } from '@/shared/managers/store/edge.store';
import { useNodeStore } from '@/shared/managers/store/nodes.store';
import { Button } from '@/shared/ui';
import { Save, Loader2 } from 'lucide-react';
import React from 'react';
import {
  CreateTopicContentDto,
  useSaveTopicMapMutation,
} from '@/shared/graphql/generated/output';
import { toast } from 'sonner';
import { useParams } from 'next/navigation';

export type SaveTopicMapDto = {
  contents?: Array<CreateTopicContentDto>;
  edgeData?: string;
  nodeData?: string;
  routeId: string;
};

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

  if (!routeId) {
    return <Button disabled variant={"default"}>Нельзя сохранить</Button>;
  }

  const { nodesList } = useNodeStore((state) => ({
    nodesList: state.nodesList,
  }));

  const { edgeList } = useEdgeStore((state) => ({ edgeList: state.edges }));

  const prepareSaveData = () => {
    const nodeData = JSON.stringify(nodesList);

    const edgeData = JSON.stringify(edgeList);

    const contents = nodesList.map((node) => ({
      routeId: routeId,
      nodeId: node.id,
    }));

    return {
      routeId,
      nodeData,
      edgeData,
      contents,
    };
  };

  const [saveTopicMap, { loading }] = useSaveTopicMapMutation();

  const handleSave = async () => {
    const data = prepareSaveData();
    try {
      await saveTopicMap({
        variables: {
          data: data, 
        },
      });

      const nodeCount = nodesList.length;
      toast.success(
        `Сохранение карты прошло успешно! Создано ${nodeCount} узлов.`,
        {
          description: `Маршрут с ID ${data.routeId} сохранён.`,
        }
      );

      if (onSave) onSave();
    } catch (error) {
      console.error('Error saving topic map:', error);
      toast.error(
        'Произошла ошибка при сохранении карты. Попробуйте снова.'
      );
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
