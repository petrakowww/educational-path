import { Button, Input, Label } from '@/shared/ui';

import { useEffect, useState } from 'react';
import { Node } from 'reactflow';
import { cn, isHexColor } from '@/shared/lib';
import { WithFontColorCommand } from '@/features/node/editor/utils/command/commands-impl';
import { nodeGetter } from '@/features/node/editor/utils/node-properties';
import { NodeDataShape } from '@/features/node/editor/types/node';
import { TextFontColorConstant } from '@/features/node/constants/text';
import { TextFontColorsEnum } from '@/features/node/editor/types/colors';

interface ICommandComponentFontColor {
	editedNode: Node<NodeDataShape>;
}

export const CommandComponentFontColor = ({
	editedNode,
}: ICommandComponentFontColor) => {
	const [fontColor, setFontColor] = useState<string | null>(null);

	const handleFontColorChange = (color: string) => {
		if (!isHexColor(color)) return;

		const command = new WithFontColorCommand(editedNode.id, color);

		command.execute();
		setFontColor(color);
	};

	const handleResetFontColor = () => {
		const command = new WithFontColorCommand(editedNode.id, null);

		command.execute();
		setFontColor(null);
	};

	const finalClassNameButtons = (color: string) => {
		return cn(
			'min-w-10 h-6 p-1 py-0 m-0 text-white hover:text-white hover:outline hover:outline-offset-1 hover:outline-primary align-middle',
			color === TextFontColorsEnum.White && 'text-black hover:text-black'
		);
	};

	useEffect(() => {
		setFontColor(nodeGetter.getFontColor(editedNode) as string | null);
	}, [editedNode]);

	return (
		<div className="flex gap-2 flex-col">
			<Label htmlFor="font-color" className="text-foreground/80">
				Цвет шрифта
			</Label>
			<div className="flex gap-2">
				{TextFontColorConstant.firstLine.map(({ title, value }) => (
					<Button
						key={value}
						className={finalClassNameButtons(value)}
						variant={fontColor === value ? 'default' : 'outline'}
						style={{ background: value }}
						onClick={() => handleFontColorChange(value)}
					>
						{title}
					</Button>
				))}
			</div>
			<div className="flex gap-2">
				{TextFontColorConstant.secondLine.map(({ title, value }) => (
					<Button
						key={value}
						className={finalClassNameButtons(value)}
						variant={fontColor === value ? 'default' : 'outline'}
						style={{ background: value }}
						onClick={() => handleFontColorChange(value)}
					>
						{title}
					</Button>
				))}
			</div>
			<div className="flex items-center justify-between mt-2">
				<Label
					className="flex-shrink-0 text-foreground/80"
					htmlFor="font-color-picker"
				>
					Выбрать цвет
				</Label>
				<div className="flex gap-2">
					<Button
						className="h-6 p-0 text-sm text-center"
						variant="outline"
						onClick={handleResetFontColor}
					>
						<span className="px-1">Сброс</span>
					</Button>
					<Input
						type="color"
						className="w-6 h-6 p-0 m-0 appearance-none border-md 
                    bg-transparent cursor-pointer text-[0px] 
                    [&::-webkit-color-swatch-wrapper]:p-0
                    [&::-webkit-color-swatch]:border-none"
						id="font-color-picker"
						onChange={(e) => handleFontColorChange(e.target.value)}
						value={fontColor || '#16a34a'}
					/>
				</div>
			</div>
		</div>
	);
};
