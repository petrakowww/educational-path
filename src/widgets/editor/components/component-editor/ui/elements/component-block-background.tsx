import { Button, Input, Label } from '@/shared/ui';
import { useState } from 'react';
import { GraphNodeBlockEditor } from '@/shared/lib/node/editor';
import { BackgroundColorEnum } from '@/shared/lib/node/component';
import { cn, isHexColor } from '@/shared/lib';
import { BackgroundColorConstant } from '../constants/background-color';

export const ComponentBlockBackground = () => {
	const [backgroundColor, setBackgroundColor] = useState(
		GraphNodeBlockEditor.backgroundColorDefaultValue()
	);

	const handleBackgroundColorChange = (color: string) => {
        if (!isHexColor(color)) return;
		setBackgroundColor(color);
		GraphNodeBlockEditor.changeBackgroundColor(color);
	};

	const finalClassNameButtons = (color: string) => {
		return cn(
			'min-w-10 h-6 p-1 py-0 m-0 text-white hover:text-white hover:outline hover:outline-offset-1 hover:outline-primary align-middle',
			color === BackgroundColorEnum.White && 'text-black hover:text-black'
		);
	};

	return (
		<div className="flex gap-2 flex-col">
			<Label htmlFor="fontsize-color" className="text-foreground/80">
				Background color
			</Label>
			<div className="flex gap-2">
				{BackgroundColorConstant.first.map(
					({title, value}) => (
						<Button
							key={value}
							className={finalClassNameButtons(value)}
							variant={
								backgroundColor === value
									? 'default'
									: 'outline'
							}
							style={{ background: value }}
							onClick={() =>
								handleBackgroundColorChange(value)
							}
						>
							{title}
						</Button>
					)
				)}
			</div>
			<div className="flex gap-2">
				{BackgroundColorConstant.second.map(
					({title, value}) => (
						<Button
							key={value}
							className={finalClassNameButtons(value)}
							variant={
								backgroundColor === value
									? 'default'
									: 'outline'
							}
							style={{ background: value }}
							onClick={() =>
								handleBackgroundColorChange(value)
							}
						>
							{title}
						</Button>
					)
				)}
			</div>
			<div className="flex items-center justify-between mt-2">
				<Label
					className="flex-shrink-0 text-foreground/80"
					htmlFor="fontsize-color"
				>
					Choose your background color
				</Label>
				<Input
					type="color"
					className="w-6 h-6 p-0 m-0 appearance-none border-md 
                    bg-transparent cursor-pointer text-[0px] 
                    [&::-webkit-color-swatch-wrapper]:p-0
                    [&::-webkit-color-swatch]:border-none"
					id="fontsize-color"
					onChange={(e) => handleBackgroundColorChange(e.target.value)}
					value={backgroundColor || '#16a34a'}
				/>
			</div>
		</div>
	);
};
