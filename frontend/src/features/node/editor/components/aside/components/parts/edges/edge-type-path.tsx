import { Button, Label } from '@/shared/ui';
import { useEdgeStore } from '@/shared/managers/store/editor/edge-editor.store';
import { cn } from '@/shared/lib';
import { IEdgeData, TPath } from '@/shared/edge/types/edge-data';
import { pathTypes } from '@/features/node/constants/path';
import { useEffect, useState } from 'react';
import { Edge } from 'reactflow';

interface IEdgePathTypeProps {
	editedEdge: Edge<IEdgeData>;
}

export const EdgePathTypeSelector = (props: IEdgePathTypeProps) => {
	const { editedEdge } = props;
	const { updateEdgeProperties } = useEdgeStore();

	const [currentPath, setCurrentPath] = useState<TPath | null>(
		editedEdge.data?.pathType ?? null
	);

	const handleClick = (value: TPath) => {
		setCurrentPath(value);
		updateEdgeProperties({
			edgeId: editedEdge.id,
			properties: { data: { pathType: value } },
		});
	};

	useEffect(() => {
		setCurrentPath(editedEdge.data?.pathType ?? null);
	}, []);

	return (
		<div className="flex flex-col gap-1">
			<Label className="text-sm text-muted-foreground">Тип пути</Label>
			<div className="flex gap-2">
				{pathTypes.map(({ icon, value, title }) => (
					<Button
						key={value}
						variant={currentPath === value ? 'default' : 'outline'}
						className={cn('h-8 w-8 p-0')}
						onClick={() => handleClick(value)}
						title={title}
					>
						{icon}
					</Button>
				))}
			</div>
		</div>
	);
};
