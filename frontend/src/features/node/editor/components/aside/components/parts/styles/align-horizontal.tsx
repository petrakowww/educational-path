import { Button, Label } from '@/shared/ui';
import { useState, useEffect } from 'react';
import { Node } from 'reactflow';
import { WithTextAlignCommand } from '@/features/node/editor/utils/command/commands-impl';
import { nodeGetter } from '@/features/node/editor/utils/node-properties';
import { NodeMain } from '@/features/node/editor/types/node';
import { TextAlignmentEnum } from '@/features/node/editor/types/styles';
import { HorizontalTextAlignmentOptions } from '@/features/node/constants/text';

interface ICommandComponentTextAlignment {
	editedNode: Node<NodeMain>;
}

export const CommandComponentTextAlignment = ({
	editedNode,
}: ICommandComponentTextAlignment) => {
	const [textAlignment, setTextAlignment] = useState<TextAlignmentEnum>(
		TextAlignmentEnum.Center
	);

	const handleTextAlignmentChange = (alignmentType: TextAlignmentEnum) => {
		setTextAlignment(alignmentType);

		const command = new WithTextAlignCommand(editedNode.id, alignmentType);

		command.execute();
	};

	useEffect(() => {
		setTextAlignment(nodeGetter.getTextAlign(editedNode));
	}, [editedNode]);

	return (
		<div className="flex gap-2 flex-col">
			<Label
				htmlFor="fontAlignment-buttons"
				className="text-foreground/80"
			>
				Выравнивание по горизонтали
			</Label>
			{editedNode && (
				<div className="flex gap-2" id="fontAlignment-buttons">
					{HorizontalTextAlignmentOptions.map(({ Icon, value }) => (
						<Button
							key={value}
							className="min-w-6 h-6 p-1 m-0"
							variant={
								textAlignment === value ? 'default' : 'outline'
							}
							onClick={() => handleTextAlignmentChange(value)}
						>
							{Icon && <Icon />}
						</Button>
					))}
				</div>
			)}
		</div>
	);
};
