import { Button, Input, Label } from '@/shared/ui';
import { useEffect, useState } from 'react';
import { GraphNodeBlockEditor } from '@/shared/lib/node/editor';
import { isHexColor } from '@/shared/lib';
import {
	GraphNodeBlockProps,
	GraphNodeComponent,
} from '@/shared/lib/node/component';
import { Node } from 'reactflow';

interface ComponentBorderColorProps {
	editedNode: Node<GraphNodeComponent<GraphNodeBlockProps>>;
}

export const ComponentBorderColor = ({
	editedNode,
}: ComponentBorderColorProps) => {
	const [borderColor, setBorderColor] = useState<string | undefined>(
		undefined
	);

	const handleResetBorderColor = () => {
		GraphNodeBlockEditor.changeBorderColor(undefined);
		setBorderColor(undefined);
	};

	const handleBorderColorChange = (color: string) => {
		if (!isHexColor(color)) return;
		setBorderColor(color);
		GraphNodeBlockEditor.changeBorderColor(color);
	};

	useEffect(() => {
		setBorderColor(GraphNodeBlockEditor.borderColorValue());
	}, [editedNode]);

	return (
		<div className="flex items-center justify-between">
			<Label
				className="flex-shrink-0 text-foreground/80"
				htmlFor="border-color"
			>
				Choose your border color
			</Label>
			<div className="flex gap-2">
				<Button
					className="h-6 p-0 text-sm text-center"
					variant={'outline'}
					onClick={handleResetBorderColor}
				>
					<span className="px-1">Reset</span>
				</Button>
				<Input
					type="color"
					className="w-6 h-6 p-0 m-0 appearance-none border-md 
                    bg-transparent cursor-pointer text-[0px] 
                    [&::-webkit-color-swatch-wrapper]:p-0
                    [&::-webkit-color-swatch]:border-none"
					id="border-color"
					value={borderColor || '#16a34a'}
					onChange={(e) => handleBorderColorChange(e.target.value)}
				/>
			</div>
		</div>
	);
};
