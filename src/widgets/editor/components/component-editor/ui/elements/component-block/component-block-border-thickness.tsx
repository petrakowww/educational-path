import { Input, Label } from '@/shared/ui';
import { useEffect, useState } from 'react';
import { GraphNodeBlockEditor } from '@/shared/lib/node/editor';
import { Node } from 'reactflow';
import {
	GraphNodeBlockProps,
	GraphNodeComponent,
} from '@/shared/lib/node/component';

interface ComponentBorderWidthProps {
	editedNode: Node<GraphNodeComponent<GraphNodeBlockProps>>;
}

export const ComponentBorderWidth = ({
	editedNode,
}: ComponentBorderWidthProps) => {
	const [borderWidth, setBorderWidth] = useState<number>(0);

	const handleBorderWidthChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const value = Number(event.target.value);
		if (isNaN(value) || value < 0 || value > 100) return;
		setBorderWidth(value);
		GraphNodeBlockEditor.changeBorderWidth(value);
	};

	useEffect(() => {
		setBorderWidth(GraphNodeBlockEditor.borderWidthDefaultValue());
	}, [editedNode]);

	return (
		<div className="flex items-center justify-between">
			<Label
				className="flex-shrink-0 text-foreground/80"
				htmlFor="border-width"
			>
				Write your border thickness
			</Label>
			<Input
				className="max-w-10 h-6 px-1.5 text-sm text-center"
				type="number"
				id="border-width"
				placeholder="px"
				value={borderWidth || ''}
				onChange={handleBorderWidthChange}
			/>
		</div>
	);
};
