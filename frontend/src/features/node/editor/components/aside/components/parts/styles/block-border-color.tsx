import { Button, Input, Label } from '@/shared/ui';
import { useEffect, useState } from 'react';
import { Node } from 'reactflow';
import { isHexColor } from '@/shared/lib';
import { WithBorderColorCommand } from '@/features/node/editor/utils/command/commands-impl';
import { nodeGetter } from '@/features/node/editor/utils/node-properties';
import { NodeMain } from '@/features/node/editor/types/node';

interface ICommandComponentBlockBorder {
	editedNode: Node<NodeMain>;
}

export const CommandComponentBlockBorderColor = ({
	editedNode,
}: ICommandComponentBlockBorder) => {
	const [borderColor, setBorderColor] = useState<string | null>(null);

	const handleBorderColorChange = (color: string) => {
		if (!isHexColor(color)) return;

		const command = new WithBorderColorCommand(editedNode.id, color);

		command.execute();
		setBorderColor(color);
	};

	const handleResetBorderColor = () => {
		const command = new WithBorderColorCommand(editedNode.id, null);

		command.execute();
		setBorderColor(null);
	};

	useEffect(() => {
		setBorderColor(nodeGetter.getBorderColor(editedNode) as string | null);
	}, [editedNode]);

	return (
		<div className="flex items-center justify-between">
			<Label
				className="flex-shrink-0 text-foreground/80"
				htmlFor="border-color-picker"
			>
				Цвет рамки
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
					id="border-color-picker"
					className="w-6 h-6 p-0 m-0 appearance-none border-md 
						bg-transparent cursor-pointer text-[0px] 
						[&::-webkit-color-swatch-wrapper]:p-0
						[&::-webkit-color-swatch]:border-none"
					value={borderColor || '#16a34a'}
					onChange={(e) => handleBorderColorChange(e.target.value)}
				/>
			</div>
		</div>
	);
};
