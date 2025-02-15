import { CSSProperties } from "react";

export interface EditorFontStyles {
	setTextColor: (color: CSSProperties['color']) => void;
	setFontSize: (size: number) => void;
	setFontWeight: (weight: number) => void;
}
