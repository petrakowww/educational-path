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
	const [borderWidth, setBorderWidth] = useState<number | undefined>(
		undefined
	);

	const handleBorderWidthChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const { value } = event.target;
		if (value === '') {
			setBorderWidth(undefined);
			GraphNodeBlockEditor.changeBorderWidth(undefined);
			return;
		}
		const numericValue = Number(value);
		if (isNaN(numericValue) || numericValue < 0 || numericValue > 10)
			return;
		GraphNodeBlockEditor.changeBorderWidth(numericValue);
		setBorderWidth(numericValue);
	};

	useEffect(() => {
		setBorderWidth(GraphNodeBlockEditor.borderWidthValue());
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
				className="max-w-10 h-6 px-1.5 text-sm 
                [&::-webkit-outer-spin-button]:appearance-none 
                [&::-webkit-inner-spin-button]:appearance-none 
                [&::-webkit-appearance]:m-0 
                text-center placeholder:text-center"
				type="number"
				id="border-width"
				placeholder="px"
				value={borderWidth === undefined ? '' : borderWidth}
				onChange={handleBorderWidthChange}
			/>
		</div>
	);
};
