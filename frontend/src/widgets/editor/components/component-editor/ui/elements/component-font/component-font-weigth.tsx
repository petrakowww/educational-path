import { GraphNodeFontEditor } from '@/shared/lib/node/editor';
import { Button, Label } from '@/shared/ui';
import { useState } from 'react';
import { TextFontWeightConstant } from '../../constants/text-font-weight';
import { Node } from 'reactflow';
import { useEffect } from 'react';
import {
	GraphNodeComponent,
	GraphNodeFontProps,
} from '@/shared/lib/node/component';
import React from 'react';

interface ComponentFontWeightProps {
	editedNode: Node<GraphNodeComponent<GraphNodeFontProps>>;
}

export const ComponentFontWeight = ({
	editedNode,
}: ComponentFontWeightProps) => {
	const [fontWeight, setFontWeight] = useState<number>(0);

	const handleFontWeightChange = (weight: number) => {
		setFontWeight(weight);
		GraphNodeFontEditor.changeTextWeight(weight);
	};

	useEffect(() => {
		setFontWeight(GraphNodeFontEditor.weightValue());
	}, [editedNode]);

	return (
		<div className="flex gap-2 flex-col">
			<Label htmlFor="fontweight-buttons" className="text-foreground/80">
				Font weight
			</Label>
			<div className="flex gap-2" id="fontweight-buttons">
				{TextFontWeightConstant.map(({ title, value }) => (
					<Button
						key={value}
						className="min-w-6 h-6 p-1 m-0"
						variant={fontWeight === value ? 'default' : 'outline'}
						onClick={() => handleFontWeightChange(value)}
					>
						{title}
					</Button>
				))}
			</div>
		</div>
	);
};
