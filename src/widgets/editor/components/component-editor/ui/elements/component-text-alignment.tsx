import { Button, Label } from '@/shared/ui';
import {
	TextAlignmentConstant,
	TextVerticalAlignmentConstant,
} from '../constants/text-alignment';
import { GraphNodeAlignmentEditor } from '@/shared/lib/node/editor';
import { useState } from 'react';
import {
	TextAlignType,
	TextVerticalAlignType,
} from '@/shared/lib/node/component';

export const ComponentTextAlignment = () => {
	const [fontAlignment, setFontAlignment] = useState<TextAlignType | null>(
		GraphNodeAlignmentEditor.textAlignmentDefaultValue()
	);

	const [fontVerticalAlignment, setFontVerticalAlignment] =
		useState<TextVerticalAlignType | null>(
			GraphNodeAlignmentEditor.textVerticalAlignmentDefaultValue()
		);

	const handleTextAlignmentChange = (alignmentType: TextAlignType) => {
		setFontAlignment(alignmentType);
		GraphNodeAlignmentEditor.changeAlignment(alignmentType);
	};

	const handleTextVerticalAlignmentChange = (
		alignmentVerticalType: TextVerticalAlignType
	) => {
		setFontVerticalAlignment(alignmentVerticalType);
		GraphNodeAlignmentEditor.changeVerticalAlignment(alignmentVerticalType);
	};

	return (
		<div className="flex gap-2 flex-col">
			<Label
				htmlFor="fontAlignment-buttons"
				className="text-foreground/80"
			>
				Text alignment
			</Label>
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
			<div className="flex gap-2" id="fontAlignment-buttons">
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
		</div>
	);
};
