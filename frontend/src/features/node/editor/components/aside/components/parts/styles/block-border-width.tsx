import { Input, Label } from '@/shared/ui';
import { useEffect, useState } from 'react';
import { Node } from 'reactflow';
import { cn } from '@/shared/lib';
import { WithBorderWidthCommand } from '@/features/node/editor/utils/command/commands-impl';
import { nodeGetter } from '@/features/node/editor/utils/node-properties';
import { NodeDataShape } from '@/features/node/editor/types/node';

interface ICommandComponentBlockBorderWidth {
	editedNode: Node<NodeDataShape>;
	minValue: number;
	maxValue: number;
}

export const CommandComponentBlockBorderWidth = ({
	editedNode,
	minValue,
	maxValue,
}: ICommandComponentBlockBorderWidth) => {
	const [borderWidth, setBorderWidth] = useState<number | null>(null);

	const handleBorderWidthChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const { value } = event.target;

		const parsedValue = value === '' ? null : Number(value);

		if (
			parsedValue !== null &&
			(isNaN(parsedValue) || parsedValue < minValue || parsedValue > maxValue)
		) {
			return;
		}

		const command = new WithBorderWidthCommand(
			editedNode.id,
			parsedValue,
		);

		command.execute();
		setBorderWidth(parsedValue);
	};

	useEffect(() => {
		setBorderWidth(nodeGetter.getBorderWidth(editedNode));
	}, [editedNode]);

	return (
		<div className="flex items-center justify-between">
			<Label
				className="flex-shrink-0 text-foreground/80"
				htmlFor="border-width"
			>
				Толщина рамки
			</Label>
			<Input
				className={cn(
					'max-w-10 h-6 px-1.5 text-sm text-center placeholder:text-center',
					'[&::-webkit-outer-spin-button]:appearance-none',
					'[&::-webkit-inner-spin-button]:appearance-none',
					'[&::-webkit-appearance]:m-0'
				)}
				type="number"
				id="border-width"
				placeholder="px"
				value={borderWidth === null ? '' : borderWidth}
				onChange={handleBorderWidthChange}
			/>
		</div>
	);
};
