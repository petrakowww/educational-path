import { Button, Label } from '@/shared/ui';
import { useEffect, useState } from 'react';
import { Node } from 'reactflow';
import { WithBorderRadiusCommand } from '@/features/node/editor/utils/command/commands-impl';
import { nodeGetter } from '@/features/node/editor/utils/node-properties';
import { NodeMain } from '@/features/node/editor/types/node';
import { BlockBorderRadius } from '@/features/node/constants/block';

interface ICommandComponentBlockBorderRadius {
	editedNode: Node<NodeMain>;
}

export const CommandComponentBlockBorderRadius = ({
	editedNode,
}: ICommandComponentBlockBorderRadius) => {
	const [borderRadius, setBorderRadius] = useState<number>(0);

	const handleBorderRadiusChange = (value: number) => {
		const command = new WithBorderRadiusCommand(editedNode.id, value);

		command.execute();
		setBorderRadius(value);
	};

	useEffect(() => {
		setBorderRadius(nodeGetter.getBorderRadius(editedNode) ?? 0);
	}, [editedNode]);

	return (
		<div className="flex flex-col gap-2">
			<Label htmlFor="border-radius" className="text-foreground/80">
				Закругление рамки
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
		</div>
	);
};
