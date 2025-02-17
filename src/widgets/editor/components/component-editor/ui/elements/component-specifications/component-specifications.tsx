interface ComponentEditorBaseProps {
	xValue: number;
	yValue: number;
	wValue: number;
	hValue: number;
}

export const ComponentEditorBase = (props: ComponentEditorBaseProps) => {
	const { xValue, yValue, wValue, hValue } = props;

	return (
		<div className="grid grid-cols-2 gap-4 text-sm">
			<div className="flex gap-4 ">
				<span className="ml-2 text-[0.785rem] text-foreground/60 w-4">
					X
				</span>
				<span className="truncate max-w-20">{xValue}</span>
			</div>
			<div className="flex gap-4 ">
				<span className="ml-2 text-[0.785rem] text-foreground/60 w-4">
					Y
				</span>
				<span className="truncate max-w-20">{yValue}</span>
			</div>
			<div className="flex gap-4 ">
				<span className="ml-2 text-[0.785rem] text-foreground/60 w-4">
					W
				</span>
				<span className="truncate max-w-20">{wValue}</span>
			</div>
			<div className="flex gap-4 ">
				<span className="ml-2 text-[0.785rem] text-foreground/60 w-4">
					H
				</span>
				<span className="truncate max-w-20">{hValue}</span>
			</div>
		</div>
	);
};
