import { GraphNodeFontEditor } from '@/shared/lib/node/editor';
import { Button, Label } from '@/shared/ui';
import { useState } from 'react';
import { TextFontWeightConstant } from '../constants/text-font-weight';

export const ComponentFontWeight = () => {
	const [fontWeight, setFontWeight] = useState(
		GraphNodeFontEditor.weightDefaultValue()
	);

	const handleFontWeightChange = (weight: number) => {
		setFontWeight(weight);
		GraphNodeFontEditor.changeTextWeight(weight);
	};

	return (
		<div className="flex gap-2 flex-col">
			<Label htmlFor="fontweight-buttons" className="text-foreground/80">
				Font weight
			</Label>
			<div className="flex gap-2" id="fontweight-buttons">
				{TextFontWeightConstant.map(({title, value}) => (
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