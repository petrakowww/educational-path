type TStrokeStyle = 'solid' | 'dashed';
export type TPath = 'bezier' | 'smoothstep' | 'straight';

export interface IEdgeData<T = unknown> {
	strokeStyle?: TStrokeStyle | null;
	color?: string | null;
	pathType?: TPath | null;
    data?: T;
}

export interface EdgePosition {
    sourceX: number,
	sourceY: number,
	targetX: number,
	targetY: number
}