import { GraphNodeFontEditor } from '@/shared/lib/node/editor';
import { Button, Input, Label } from '@/shared/ui';
import { useEffect, useState } from 'react';
import { TextFontSizeConstant } from '../../constants/text-font-size';
import { Node } from 'reactflow';
import {
	GraphNodeComponent,
	GraphNodeFontProps,
} from '@/shared/lib/node/component';

interface ComponentFontSizeProps {
	editedNode: Node<GraphNodeComponent<GraphNodeFontProps>>;
}

export const ComponentFontSize = ({ editedNode }: ComponentFontSizeProps) => {
	const [fontSize, setFontSize] = useState<number | undefined>(undefined);

	const handleFontSizeChange = (value: string) => {
		if (value === '') {
			setFontSize(undefined);
			GraphNodeFontEditor.changeFontSize(undefined);
			return;
		}
		const numericValue = Number(value);
		if (isNaN(numericValue) || numericValue < 0 || numericValue > 100)
			return;
		GraphNodeFontEditor.changeFontSize(numericValue);
		setFontSize(numericValue);
	};

	useEffect(() => {
		setFontSize(GraphNodeFontEditor.sizeValue());
	}, [editedNode]);

	return (
		<div className="flex gap-2 flex-col">
			<Label htmlFor="fontsize-buttons" className="text-foreground/80">
				Font size
			</Label>
			<div className="flex gap-2">
				{TextFontSizeConstant.map(({ title, value }) => (
					<Button
						key={value}
						className="min-w-6 h-6 p-1 m-0"
						variant={fontSize === value ? 'default' : 'outline'}
						onClick={() => handleFontSizeChange(value.toString())}
					>
						{title}
					</Button>
				))}
				<div className="flex gap-2">
					<span className="lowercase">or</span>
					<div>
						<Input
							className="max-w-10 h-6 px-1.5 text-sm 
                            [&::-webkit-outer-spin-button]:appearance-none 
                            [&::-webkit-inner-spin-button]:appearance-none 
                            [&::-webkit-appearance]:m-0 
                            text-center placeholder:text-left"
							type="number"
							id="fontsize-buttons"
							placeholder="size"
							onChange={(e) =>
								handleFontSizeChange(e.target.value)
							}
							value={fontSize ?? ''}
						/>
					</div>
					<span className="text-sm flex items-center">px</span>
				</div>
			</div>
		</div>
	);
};
