import { Button, Input, Label } from '@/shared/ui';
import { TextFontColorConstant } from '../constants/text-font-color';
import { useState } from 'react';
import { GraphNodeFontEditor } from '@/shared/lib/node/editor';
import { cn, isHexColor } from '@/shared/lib';
import { TextFontColorEnum } from '@/shared/lib/node/component';

export const ComponentFontColor = () => {
	const [fontColor, setFontColor] = useState(
		GraphNodeFontEditor.colorDefaultValue()
	);

	const handleFontColorChange = (color: string) => {
		if (!isHexColor(color)) return;
		setFontColor(color);
		GraphNodeFontEditor.changeTextColor(color);
	};

	const finalClassNameButtons = (color: string) => {
		return cn(
			'min-w-10 h-6 p-1 py-0 m-0 text-white hover:text-white hover:outline hover:outline-offset-1 hover:outline-primary align-middle',
			color === TextFontColorEnum.White && 'text-black hover:text-black'
		);
	};

	return (
		<div className="flex gap-2 flex-col">
			<Label htmlFor="background-color" className="text-foreground/80">
				Font color
			</Label>
			<div className="flex gap-2">
				{TextFontColorConstant.first.map(
					({title, value}) => (
						<Button
							key={value}
							className={finalClassNameButtons(value)}
							variant={
								fontColor === value
									? 'default'
									: 'outline'
							}
							style={{ background: value }}
							onClick={() => handleFontColorChange(value)}
						>
							{title}
						</Button>
					)
				)}
			</div>
			<div className="flex gap-2">
				{TextFontColorConstant.second.map(
					({title, value}) => (
						<Button
							key={value}
							className={finalClassNameButtons(value)}
							variant={
								fontColor === value
									? 'default'
									: 'outline'
							}
							style={{ background: value }}
							onClick={() => handleFontColorChange(value)}
						>
							{title}
						</Button>
					)
				)}
			</div>
			<div className="flex items-center justify-between mt-2">
				<Label
					className="flex-shrink-0 text-foreground/80"
					htmlFor="background-color"
				>
					Choose your font color
				</Label>
				<Input
					type="color"
					className="w-6 h-6 p-0 m-0 appearance-none border-md 
                    bg-transparent cursor-pointer text-[0px] 
                    [&::-webkit-color-swatch-wrapper]:p-0
                    [&::-webkit-color-swatch]:border-none"
					id="background-color"
					onChange={(e) => handleFontColorChange(e.target.value)}
					value={fontColor || '#16a34a'}
				/>
			</div>
		</div>
	);
};
