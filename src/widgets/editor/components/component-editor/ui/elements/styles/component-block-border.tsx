import { Button, Input, Label } from '@/shared/ui';
import { GraphNodeBlockEditor } from '@/shared/lib/node/editor';
import { BlockBorderRadius } from '../../constants/border-size';
import { useState } from 'react';
import { isHexColor } from '@/shared/lib';
import { Node } from 'reactflow';
import { GlobalGraphNodeTypesComponents } from '@/shared/lib/node/component';
import { useEffect } from 'react';

interface ComponentBlockBorderProps {
	editedNode: Node<GlobalGraphNodeTypesComponents> | null;
}

export const ComponentBlockBorder = ({ editedNode }: ComponentBlockBorderProps) => {
	const [borderRadius, setBorderRadius] = useState<number>(0);
	const [borderWidth, setBorderWidth] = useState<number>(0);
	const [borderColor, setBorderColor] = useState<string>('');

	useEffect(() => {
		if (editedNode) {
			setBorderRadius(GraphNodeBlockEditor.borderRadiusDefaultValue());
			setBorderWidth(GraphNodeBlockEditor.borderWidthDefaultValue());
			setBorderColor(GraphNodeBlockEditor.borderColorDefaultValue());
		}
	}, [editedNode]);

	const handleBorderRadiusChange = (value: number) => {
		setBorderRadius(value);
		GraphNodeBlockEditor.changeBorderRadius(value);
	};

	const handleResetBorderColor = () => {
		GraphNodeBlockEditor.changeBorderColor('');
		setBorderColor('');
	};

	const handleBorderWidthChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const value = Number(event.target.value);

		if (isNaN(value) || value < 0 || value > 100) return;

		setBorderWidth(value);
		GraphNodeBlockEditor.changeBorderWidth(value);
	};

	const handleBorderColorChange = (color: string) => {
		if (!isHexColor(color)) return;
		setBorderColor(color);
		GraphNodeBlockEditor.changeBorderColor(color);
	};

	return (
		<div className="flex gap-2 flex-col">
			<Label htmlFor="border-size" className="text-foreground/80">
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
			<div className="flex items-center justify-between mt-2">
				<Label
					className="flex-shrink-0 text-foreground/80"
					htmlFor="border-size"
				>
					Write your border thickness
				</Label>
				<Input
					className="max-w-10 h-6 px-1.5 text-sm text-center
                            [&::-webkit-outer-spin-button]:appearance-none 
                            [&::-webkit-inner-spin-button]:appearance-none 
                            [&::-webkit-appearance]:m-0 
                            [&::-webkit-input-placeholder]:text-center
                            placeholder:text-left"
					type="number"
					id="border-size"
					placeholder="px"
					value={borderWidth || ''}
					onChange={handleBorderWidthChange}
				/>
			</div>
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
						onChange={(e) =>
							handleBorderColorChange(e.target.value)
						}
					/>
				</div>
			</div>
		</div>
	);
};
