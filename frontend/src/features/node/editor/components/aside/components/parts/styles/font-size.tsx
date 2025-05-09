import { Button, Input, Label } from '@/shared/ui';
import { useEffect, useState } from 'react';
import { Node } from 'reactflow';
import { WithFontSizeCommand } from '@/features/node/editor/utils/command/commands-impl';
import { NodeAccessor } from '@/features/node/editor/utils/node-properties';
import { NodeMain } from '@/features/node/editor/types/node';
import { TextFontSizeConstant } from '@/features/node/constants/text';
import { TextFontSizeEnum } from '@/features/node/editor/types/styles';
import { nodeBuilderConfig } from '@/features/node/editor/config/node-builder-config';

interface ICommandComponentFontSize {
	editedNode: Node<NodeMain>;
	minValue: number;
	maxValue: number;
}

export const CommandComponentFontSize = ({
	editedNode,
	minValue,
	maxValue,
}: ICommandComponentFontSize) => {
	const [fontSize, setFontSize] = useState<number | null>(
		TextFontSizeEnum.XL
	);

	const handleFontSizeChange = (value: string) => {
		if (!value) {
			const command = new WithFontSizeCommand(editedNode.id, 0);
			command.execute();
			setFontSize(null);
			return;
		}

		const numericValue = Number(value);
		if (
			isNaN(numericValue) ||
			numericValue < minValue ||
			numericValue > maxValue
		)
			return;

		const command = new WithFontSizeCommand(editedNode.id, numericValue);
		command.execute();
		setFontSize(numericValue);
	};

	useEffect(() => {
		setFontSize(
			new NodeAccessor(editedNode).get(
				'meta.fontProps.fontSize',
				nodeBuilderConfig.meta.fontProps.fontSize
			)
		);
	}, [editedNode]);

	return (
		<div className="flex gap-2 flex-col">
			<Label htmlFor="fontsize-buttons" className="text-foreground/80">
				Размер шрифта
			</Label>
			<div className="flex gap-2">
				{TextFontSizeConstant.map(({ title, value }) => (
					<Button
						key={value}
						className="min-w-6 h-6 p-1 m-0"
						variant={fontSize === value ? 'default' : 'outline'}
						onClick={() => handleFontSizeChange(value.toString())}
					>
						{title}
					</Button>
				))}
				<div className="flex gap-2">
					<span className="lowercase">или</span>
					<div>
						<Input
							className="max-w-10 h-6 px-1.5 text-sm 
                            [&::-webkit-outer-spin-button]:appearance-none 
                            [&::-webkit-inner-spin-button]:appearance-none 
                            [&::-webkit-appearance]:m-0 
                            text-center placeholder:text-left"
							type="number"
							id="fontsize-buttons"
							placeholder="р."
							onChange={(e) =>
								handleFontSizeChange(e.target.value)
							}
							value={fontSize ?? ''}
						/>
					</div>
					<span className="text-sm flex items-center">px</span>
				</div>
			</div>
		</div>
	);
};
