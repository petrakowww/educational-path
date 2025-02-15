export interface EditorNode {
	close(): void;
    autoSize(): void;

	getWidth: () => number;
	getHeight: () => number;
	getXPosition: () => number;
	getYPosition: () => number;
	getPosition: () => { x: number; y: number };
}
