import { Input, Label } from '@/shared/ui';
import { useEffect, useState } from 'react';
import { GraphNodeBlockEditor } from '@/shared/lib/node/editor';
import { Node } from 'reactflow';
import {
	GraphNodeBlockProps,
	GraphNodeComponent,
} from '@/shared/lib/node/component';

interface ComponentBlockPaddingProps {
	editedNode: Node<GraphNodeComponent<GraphNodeBlockProps>>;
}

export const ComponentBlockPadding = ({
	editedNode,
}: ComponentBlockPaddingProps) => {
	const [blockPadding, setBlockPadding] = useState<number | undefined>(
		undefined
	);

	const handlePaddingWidthChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const { value } = event.target;
		if (value === '') {
			setBlockPadding(undefined);
			GraphNodeBlockEditor.changePadding(undefined);
			return;
		}
		const numericValue = Number(value);
		if (isNaN(numericValue) || numericValue < 0 || numericValue > 100)
			return;
		setBlockPadding(numericValue);
		GraphNodeBlockEditor.changePadding(numericValue);
	};

	useEffect(() => {
		setBlockPadding(GraphNodeBlockEditor.paddingValue());
	}, [editedNode]);

	return (
		<div className="flex items-center justify-between">
			<Label
				className="flex-shrink-0 text-foreground/80"
				htmlFor="padding-size"
			>
				Write your padding block
			</Label>
			<Input
				className="max-w-10 h-6 px-1.5 text-sm 
                [&::-webkit-outer-spin-button]:appearance-none 
                [&::-webkit-inner-spin-button]:appearance-none 
                [&::-webkit-appearance]:m-0 
                text-center placeholder:text-center"
				type="number"
				id="padding-size"
				placeholder="px"
				value={blockPadding === undefined ? '' : blockPadding}
				onChange={handlePaddingWidthChange}
			/>
		</div>
	);
};
