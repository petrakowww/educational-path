import { CSSProperties } from "react";

export interface EditorBlockStyles {
	setBackgroundColor: (color: CSSProperties['color']) => void;
	setBorderColor: (color: CSSProperties['color']) => void;
	setBorderRadius: (radius: number) => void;
	setEdgeColor: (color: CSSProperties['color']) => void;
	setEdgeBorderColor: (color: CSSProperties['color']) => void;
}