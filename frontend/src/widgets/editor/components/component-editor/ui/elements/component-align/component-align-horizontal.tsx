import { Button, Label } from '@/shared/ui';
import { TextAlignmentConstant } from '../../constants/text-alignment';
import { GraphNodeAlignmentEditor } from '@/shared/lib/node/editor';
import { useState, useEffect } from 'react';
import {
	GraphNodeComponent,
	GraphNodeAlignmentTextProps,
	TextAlignmentEnum,
} from '@/shared/lib/node/component';
import { Node } from 'reactflow';

interface ComponentTextAlignmentHorizontalProps {
	editedNode: Node<GraphNodeComponent<GraphNodeAlignmentTextProps>>;
}

export const ComponentTextAlignmentHorizontal = ({
	editedNode,
}: ComponentTextAlignmentHorizontalProps) => {
	const [fontAlignment, setFontAlignment] =
		useState<TextAlignmentEnum | null>(null);

	const handleTextAlignmentChange = (alignmentType: TextAlignmentEnum) => {
		setFontAlignment(alignmentType);
		GraphNodeAlignmentEditor.changeAlignment(alignmentType);
	};

	useEffect(() => {
		setFontAlignment(GraphNodeAlignmentEditor.textAlignmentValue());
	}, [editedNode]);

	return (
		<div className="flex gap-2 flex-col">
			<Label
				htmlFor="fontAlignment-buttons"
				className="text-foreground/80"
			>
				Text alignment
			</Label>
			{editedNode && (
				<div className="flex gap-2" id="fontAlignment-buttons">
					{TextAlignmentConstant.map(({ TitleIcon, value }) => (
						<Button
							key={value}
							className="min-w-6 h-6 p-1 m-0"
							variant={
								fontAlignment === value ? 'default' : 'outline'
							}
							onClick={() => handleTextAlignmentChange(value)}
						>
							{TitleIcon && <TitleIcon />}
						</Button>
					))}
				</div>
			)}
		</div>
	);
};
