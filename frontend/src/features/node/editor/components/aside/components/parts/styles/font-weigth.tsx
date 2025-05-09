import { Button, Label } from '@/shared/ui';
import { useEffect, useState } from 'react';
import { Node } from 'reactflow';
import { WithFontWeightCommand } from '@/features/node/editor/utils/command/commands-impl';
import { NodeMain } from '@/features/node/editor/types/node';
import { TextFontWeightConstant } from '@/features/node/constants/text';
import { TextFontWeightEnum } from '@/features/node/editor/types/styles';
import { NodeAccessor } from '@/features/node/editor/utils/node-properties';
import { nodeBuilderConfig } from '@/features/node/editor/config/node-builder-config';

interface ICommandComponentFontWeight {
	editedNode: Node<NodeMain>;
}

export const CommandComponentFontWeight = ({
	editedNode,
}: ICommandComponentFontWeight) => {
	const [fontWeight, setFontWeight] = useState<number>(
		TextFontWeightEnum.Regular
	);

	const handleFontWeightChange = (weight: number) => {
		const command = new WithFontWeightCommand(editedNode.id, weight);
		command.execute();
		setFontWeight(weight);
	};

	useEffect(() => {
		setFontWeight(
			new NodeAccessor(editedNode).get(
				'meta.fontProps.fontWeight',
				nodeBuilderConfig.meta.fontProps.fontWeight
			)
		);
	}, [editedNode]);

	return (
		<div className="flex gap-2 flex-col">
			<Label htmlFor="fontweight-buttons" className="text-foreground/80">
				Толщина шрифта
			</Label>
			<div className="flex gap-2" id="fontweight-buttons">
				{TextFontWeightConstant.map(({ title, value }) => (
					<Button
						key={value}
						className="min-w-6 h-6 p-1 m-0"
						variant={fontWeight === value ? 'default' : 'outline'}
						onClick={() => handleFontWeightChange(value)}
					>
						{title}
					</Button>
				))}
			</div>
		</div>
	);
};
