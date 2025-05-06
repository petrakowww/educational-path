import { VerticalTextAlignmentOptions } from '@/features/node/constants/text';
import { NodeMain } from '@/features/node/editor/types/node';
import { JustificationEnum } from '@/features/node/editor/types/styles';
import { WithJustificationCommand } from '@/features/node/editor/utils/command/commands-impl';
import { nodeGetter } from '@/features/node/editor/utils/node-properties';
import { Button, Label } from '@/shared/ui';
import { useState, useEffect } from 'react';
import { Node } from 'reactflow';

interface ICommandComponentJustify {
	editedNode: Node<NodeMain>;
}

export const CommandComponentJustify = ({
	editedNode,
}: ICommandComponentJustify) => {
	const [textJustify, setTextJustify] = useState<JustificationEnum>(
		JustificationEnum.Middle
	);

	const handleTextVerticalAlignmentChange = (
		alignmentVerticalType: JustificationEnum
	) => {
		setTextJustify(alignmentVerticalType);

		const command = new WithJustificationCommand(
			editedNode.id,
			alignmentVerticalType
		);

		command.execute();
	};

	useEffect(() => {
		setTextJustify(nodeGetter.getJustification(editedNode));
	}, [editedNode]);

	return (
		<div className="flex gap-2 flex-col">
			<Label
				htmlFor="fontVerticalAlignment-buttons"
				className="text-foreground/80"
			>
				Выравнивание по вертикали
			</Label>
			{editedNode && (
				<div className="flex gap-2" id="fontVerticalAlignment-buttons">
					{VerticalTextAlignmentOptions.map(({ Icon, value }) => (
						<Button
							key={value}
							className="min-w-6 h-6 p-1 m-0"
							variant={
								textJustify === value ? 'default' : 'outline'
							}
							onClick={() =>
								handleTextVerticalAlignmentChange(value)
							}
						>
							{Icon && <Icon />}
						</Button>
					))}
				</div>
			)}
		</div>
	);
};
