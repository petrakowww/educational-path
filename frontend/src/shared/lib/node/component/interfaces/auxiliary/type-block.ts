export interface GraphNodeBackgroundColorProps {
	backgroundColor: React.CSSProperties['color'];
}

export interface GraphNodeBorderColorProps {
	borderColor: React.CSSProperties['color'];
}

export interface GraphNodeBorderRadius {
	borderRadius: number;
}

export interface GraphNodeBorderWidth {
	borderWidth?: number;
}

export interface GraphNodePadding {
	padding?: number;
}

export interface GraphNodeBlockProps {
	blockProps: Partial<
		GraphNodeBackgroundColorProps &
			GraphNodeBorderColorProps &
			GraphNodeBorderRadius &
			GraphNodeBorderWidth & 
			GraphNodePadding
	>;
}
