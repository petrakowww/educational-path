import { Button, Input, Label } from '@/shared/ui';
import { useEffect, useState } from 'react';
import { Edge, EdgeMarker, MarkerType } from 'reactflow';
import { isHexColor } from '@/shared/lib';
import { useEdgeStore } from '@/shared/managers/store/editor/edge-editor.store';
import { IEdgeData } from '@/shared/edge/types/edge-data';
import { PrimaryColors } from '@/features/node/editor/types/colors';

interface ICommandComponentEdgeColor {
	editedEdge: Edge<IEdgeData>;
}

export const CommandComponentEdgeLine = ({
	editedEdge,
}: ICommandComponentEdgeColor) => {
	const { updateEdgeProperties } = useEdgeStore();
	const [edgeColor, setEdgeColor] = useState<string | null>(null);

	const handleBorderColorChange = (color: string) => {
		if (!isHexColor(color)) return;

		setEdgeColor(color);
		updateEdgeProperties({
			edgeId: editedEdge.id,
			properties: {
				data: {
					color: color,
				},
				markerEnd: {
					...((editedEdge.markerEnd as EdgeMarker) ?? {}),
					color: color,
				},
			},
		});
	};

	const handleResetBorderColor = () => {
		updateEdgeProperties({
			edgeId: editedEdge.id,
			properties: {
				data: { color: null },
				markerEnd: {
					...((editedEdge.markerEnd as EdgeMarker) ?? {}),
					color: PrimaryColors.Primary,
				},
			},
		});
		setEdgeColor(null);
	};

	useEffect(() => {
		setEdgeColor(editedEdge.data?.color ?? null);
	}, [editedEdge]);

	return (
		<div className="flex items-center justify-between">
			<Label
				className="flex-shrink-0 text-foreground/80"
				htmlFor="edge-color-picker"
			>
				Цвет ребра
			</Label>
			<div className="flex gap-2">
				<Button
					className="h-6 p-0 text-sm text-center"
					variant="outline"
					onClick={handleResetBorderColor}
				>
					<span className="px-1">Сброс</span>
				</Button>
				<Input
					type="color"
					id="edge-color-picker"
					className="w-6 h-6 p-0 m-0 appearance-none border-md 
                        bg-transparent cursor-pointer text-[0px] 
                        [&::-webkit-color-swatch-wrapper]:p-0
                        [&::-webkit-color-swatch]:border-none"
					value={edgeColor || PrimaryColors.Primary}
					onChange={(e) => handleBorderColorChange(e.target.value)}
				/>
			</div>
		</div>
	);
};
