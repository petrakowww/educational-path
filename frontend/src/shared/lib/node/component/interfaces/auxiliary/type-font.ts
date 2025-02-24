export interface GraphNodeFontSizeProps {
	fontSize?: number;
}

export interface GraphNodeFontWeightProps {
	fontWeight: number;
}

export interface GraphNodeFontColorProps {
	fontColor: React.CSSProperties['color'];
}

export interface GraphNodeFontProps {
	fontProps: Partial<
		GraphNodeFontSizeProps &
			GraphNodeFontWeightProps &
			GraphNodeFontColorProps
	>;
}
