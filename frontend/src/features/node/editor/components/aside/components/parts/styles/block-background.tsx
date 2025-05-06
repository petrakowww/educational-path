import { Button, Input, Label } from '@/shared/ui';
import { useState, useEffect } from 'react';
import { Node } from 'reactflow';
import { cn, isHexColor } from '@/shared/lib';
import { WithBackgroundColorCommand } from '@/features/node/editor/utils/command/commands-impl';
import { nodeGetter } from '@/features/node/editor/utils/node-properties';
import { BackgroundColorConstant } from '@/features/node/constants/block';
import { NodeMain } from '@/features/node/editor/types/node';
import { BackgroundColorsEnum } from '@/features/node/editor/types/colors';

interface ICommandComponentBlockBackground {
	editedNode: Node<NodeMain>;
}

export const CommandComponentBlockBackground = ({
	editedNode,
}: ICommandComponentBlockBackground) => {
	const [backgroundColor, setBackgroundColor] = useState<string | null>(null);

	const handleBackgroundColorChange = (color: string) => {
		if (!isHexColor(color)) return;

		const command = new WithBackgroundColorCommand(editedNode.id, color);

		setBackgroundColor(color);
		command.execute();
	};

	const handleResetBackgroundColor = () => {
		const command = new WithBackgroundColorCommand(editedNode.id, null);

		command.execute();
		setBackgroundColor(null);
	};

	const getButtonClassName = (color: string) => {
		return cn(
			'min-w-10 h-6 p-1 py-0 m-0 text-white hover:text-white hover:outline hover:outline-offset-1 hover:outline-primary align-middle',
			color === BackgroundColorsEnum.White &&
				'text-black hover:text-black'
		);
	};

	useEffect(() => {
		setBackgroundColor(
			nodeGetter.getBackgroundColor(editedNode) as string | null
		);
	}, [editedNode]);

	return (
		<div className="flex flex-col gap-2">
			<Label
				htmlFor="background-color-picker"
				className="text-foreground/80"
			>
				Цвет фона
			</Label>

			<div className="flex gap-2">
				{BackgroundColorConstant.firstLine.map(({ title, value }) => (
					<Button
						key={value}
						className={getButtonClassName(value)}
						variant={
							backgroundColor === value ? 'default' : 'outline'
						}
						style={{ background: value }}
						onClick={() => handleBackgroundColorChange(value)}
					>
						{title}
					</Button>
				))}
			</div>

			<div className="flex gap-2">
				{BackgroundColorConstant.secondLine.map(({ title, value }) => (
					<Button
						key={value}
						className={getButtonClassName(value)}
						variant={
							backgroundColor === value ? 'default' : 'outline'
						}
						style={{ background: value }}
						onClick={() => handleBackgroundColorChange(value)}
					>
						{title}
					</Button>
				))}
			</div>

			<div className="flex items-center justify-between mt-2">
				<Label
					className="flex-shrink-0 text-foreground/80"
					htmlFor="background-color-picker"
				>
					Выберите свой цвет
				</Label>
				<div className="flex gap-2">
					<Button
						className="h-6 p-0 text-sm text-center"
						variant="outline"
						onClick={handleResetBackgroundColor}
					>
						<span className="px-1">Сброс</span>
					</Button>
					<Input
						type="color"
						id="background-color-picker"
						className="w-6 h-6 p-0 m-0 appearance-none border-md 
						bg-transparent cursor-pointer text-[0px]
						[&::-webkit-color-swatch-wrapper]:p-0
						[&::-webkit-color-swatch]:border-none"
						value={backgroundColor || '#16a34a'}
						onChange={(e) =>
							handleBackgroundColorChange(e.target.value)
						}
					/>
				</div>
			</div>
		</div>
	);
};
