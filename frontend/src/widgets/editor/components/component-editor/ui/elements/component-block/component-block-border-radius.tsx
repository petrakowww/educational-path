import { Button, Label } from '@/shared/ui';
import { BlockBorderRadius } from '../../constants/border-size';
import { useEffect, useState } from 'react';
import { GraphNodeBlockEditor } from '@/shared/lib/node/editor';
import {
	GraphNodeBlockProps,
	GraphNodeComponent,
} from '@/shared/lib/node/component';
import { Node } from 'reactflow';

interface ComponentBorderRadiusProps {
	editedNode: Node<GraphNodeComponent<GraphNodeBlockProps>>;
}

export const ComponentBorderRadius = ({
	editedNode,
}: ComponentBorderRadiusProps) => {
	const [borderRadius, setBorderRadius] = useState<number>(0);

	const handleBorderRadiusChange = (value: number) => {
		setBorderRadius(value);
		GraphNodeBlockEditor.changeBorderRadius(value);
	};

	useEffect(() => {
		setBorderRadius(GraphNodeBlockEditor.borderRadiusValue());
	}, [editedNode]);

	return (
		<div className="flex gap-2 flex-col">
			<Label htmlFor="border-radius" className="text-foreground/80">
				Border radius
			</Label>
			<div className="flex gap-2">
				{BlockBorderRadius.map(({ title, value }) => (
					<Button
						key={value}
						className="min-w-6 h-6 p-1 m-0"
						variant={borderRadius === value ? 'default' : 'outline'}
						onClick={() => handleBorderRadiusChange(value)}
					>
						{title}
					</Button>
				))}
			</div>
		</div>
	);
};
