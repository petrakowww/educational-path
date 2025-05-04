import { useEffect, useState } from 'react';
import { Button, Label } from '@/shared/ui';
import { useEdgeStore } from '@/shared/managers/store/edge.store';
import { cn } from '@/shared/lib';
import { Edge } from 'reactflow';
import { IEdgeData, TStrokeStyle } from '@/shared/edge/types/edge-data';
import { EllipsisIcon, MinusIcon } from 'lucide-react';

interface IEdgeStrokeStyleSelectorProps {
	editedEdge: Edge<IEdgeData>;
}

export const EdgeStrokeStyleSelector = ({
	editedEdge,
}: IEdgeStrokeStyleSelectorProps) => {
	const { updateEdgeProperties } = useEdgeStore();
	const [strokeStyle, setStrokeStyle] = useState<TStrokeStyle | null>(
		editedEdge.data?.strokeStyle ?? null
	);

	useEffect(() => {
		setStrokeStyle(editedEdge.data?.strokeStyle ?? null);
	}, [editedEdge]);

	const handleClick = (value: TStrokeStyle) => {
		setStrokeStyle(value);
		updateEdgeProperties({
			edgeId: editedEdge.id,
			properties: { data: { strokeStyle: value } },
		});
	};

	return (
		<div className="flex flex-col gap-1">
			<Label className="text-sm text-muted-foreground">Стиль линии</Label>
			<div className="flex gap-2">
				<Button
					variant={strokeStyle === 'solid' ? 'default' : 'outline'}
					className={cn('h-8 w-8 p-0')}
					onClick={() => handleClick('solid')}
				>
					<MinusIcon />
				</Button>
				<Button
					variant={strokeStyle === 'dashed' ? 'default' : 'outline'}
					className={cn('h-8 w-8 p-0')}
					onClick={() => handleClick('dashed')}
				>
					<EllipsisIcon />
				</Button>
			</div>
		</div>
	);
};
