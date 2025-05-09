import { useEffect, useState } from 'react';
import { Button, Label } from '@/shared/ui';
import { useEdgeStore } from '@/shared/managers/store/editor/edge-editor.store';
import { cn } from '@/shared/lib';
import { Edge } from 'reactflow';
import { IEdgeData } from '@/shared/edge/types/edge-data';
import { ArrowRightIcon, ArrowBigRightIcon } from 'lucide-react';
import { MarkerType } from 'reactflow';
import { PrimaryColors } from '@/features/node/editor/types/colors';
import { EdgeMarker } from '@xyflow/react';

interface IEdgeMarkerSelectorProps {
	editedEdge: Edge<IEdgeData>;
}

export const EdgeMarkerSelector = ({
	editedEdge,
}: IEdgeMarkerSelectorProps) => {
	const { updateEdgeProperties } = useEdgeStore();

	const [markerType, setMarkerType] = useState<MarkerType>(
		(editedEdge.markerEnd as EdgeMarker)?.type ?? MarkerType.ArrowClosed
	);

	useEffect(() => {
		setMarkerType(
			(editedEdge.markerEnd as EdgeMarker)?.type ?? MarkerType.ArrowClosed
		);
	}, [editedEdge]);

	const handleClick = (type: MarkerType) => {
		setMarkerType(type);
		updateEdgeProperties({
			edgeId: editedEdge.id,
			properties: {
				markerEnd: {
					type,
					color:
						(editedEdge.markerEnd as EdgeMarker)?.color ??
						PrimaryColors.Primary,
					width: 15,
					height: 15,
				},
			},
		});
	};

	return (
		<div className="flex flex-col gap-1">
			<Label className="text-sm text-muted-foreground">Тип стрелки</Label>
			<div className="flex gap-2">
				<Button
					variant={
						markerType === MarkerType.ArrowClosed
							? 'default'
							: 'outline'
					}
					className={cn('h-8 w-8 p-0')}
					onClick={() => handleClick(MarkerType.ArrowClosed)}
					title="Закрытая стрелка"
				>
					<ArrowBigRightIcon />
				</Button>
				<Button
					variant={
						markerType === MarkerType.Arrow ? 'default' : 'outline'
					}
					className={cn('h-8 w-8 p-0')}
					onClick={() => handleClick(MarkerType.Arrow)}
					title="Открытая стрелка"
				>
					<ArrowRightIcon />
				</Button>
			</div>
		</div>
	);
};
