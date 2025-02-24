import { Button, Label } from '@/shared/ui';
import { TextVerticalAlignmentConstant } from '../../constants/text-alignment';
import { GraphNodeAlignmentEditor } from '@/shared/lib/node/editor';
import { useState, useEffect } from 'react';
import {
	GraphNodeComponent,
	GraphNodeAlignmentTextProps,
	TextVerticalAlignmentEnum,
} from '@/shared/lib/node/component';
import { Node } from 'reactflow';

interface ComponentTextAlignmentVerticalProps {
	editedNode: Node<GraphNodeComponent<GraphNodeAlignmentTextProps>>;
}

export const ComponentTextAlignmentVertical = ({
	editedNode,
}: ComponentTextAlignmentVerticalProps) => {
	const [fontVerticalAlignment, setFontVerticalAlignment] =
		useState<TextVerticalAlignmentEnum | null>(null);

	const handleTextVerticalAlignmentChange = (
		alignmentVerticalType: TextVerticalAlignmentEnum
	) => {
		setFontVerticalAlignment(alignmentVerticalType);
		GraphNodeAlignmentEditor.changeVerticalAlignment(alignmentVerticalType);
	};

	useEffect(() => {
		setFontVerticalAlignment(
			GraphNodeAlignmentEditor.textVerticalAlignmentValue()
		);
	}, [editedNode]);

	return (
		<div className="flex gap-2 flex-col">
			<Label
				htmlFor="fontVerticalAlignment-buttons"
				className="text-foreground/80"
			>
				Vertical alignment
			</Label>
			{editedNode && (
				<div className="flex gap-2" id="fontVerticalAlignment-buttons">
					{TextVerticalAlignmentConstant.map(
						({ TitleVerticalIcon, value }) => (
							<Button
								key={value}
								className="min-w-6 h-6 p-1 m-0"
								variant={
									fontVerticalAlignment === value
										? 'default'
										: 'outline'
								}
								onClick={() =>
									handleTextVerticalAlignmentChange(value)
								}
							>
								{TitleVerticalIcon && <TitleVerticalIcon />}
							</Button>
						)
					)}
				</div>
			)}
		</div>
	);
};
