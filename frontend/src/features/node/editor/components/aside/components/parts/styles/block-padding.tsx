import { Input, Label } from '@/shared/ui';
import { useEffect, useState } from 'react';
import { Node } from 'reactflow';
import { cn } from '@/shared/lib';
import { WithPaddingCommand } from '@/features/node/editor/utils/command/commands-impl';
import { nodeGetter } from '@/features/node/editor/utils/node-properties';
import { NodeMain } from '@/features/node/editor/types/node';

interface ICommandComponentPadding {
	editedNode: Node<NodeMain>;
	minValue: number;
	maxValue: number;
}

export const CommandComponentPadding = ({
	editedNode,
	minValue,
	maxValue,
}: ICommandComponentPadding) => {
	const [blockPadding, setBlockPadding] = useState<number | null>(null);

	const handleBlockPaddingChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const { value } = event.target;

		const parsedValue = value === '' ? null : Number(value);

		if (
			parsedValue !== null &&
			(isNaN(parsedValue) ||
				parsedValue < minValue ||
				parsedValue > maxValue)
		) {
			return;
		}

		const command = new WithPaddingCommand(editedNode.id, parsedValue);

		command.execute();
		setBlockPadding(parsedValue);
	};

	useEffect(() => {
		setBlockPadding(nodeGetter.getPadding(editedNode));
	}, [editedNode]);

	return (
		<div className="flex items-center justify-between">
			<Label
				className="flex-shrink-0 text-foreground/80"
				htmlFor="padding-size"
			>
				Отступ внутри блока
			</Label>
			<Input
				className={cn(
					'max-w-10 h-6 px-1.5 text-sm text-center placeholder:text-center',
					'[&::-webkit-outer-spin-button]:appearance-none',
					'[&::-webkit-inner-spin-button]:appearance-none',
					'[&::-webkit-appearance]:m-0'
				)}
				type="number"
				id="padding-size"
				placeholder="px"
				value={blockPadding === null ? '' : blockPadding}
				onChange={handleBlockPaddingChange}
			/>
		</div>
	);
};
