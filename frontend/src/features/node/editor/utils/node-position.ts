import { getNodesBounds, Node } from "reactflow";

export class NodePosition {
	getWidth(node: Node): number {
		const bounds = getNodesBounds([node]);
		return Math.round(bounds.width);
	}

	getHeight(node: Node): number {
		const bounds = getNodesBounds([node]);
		return Math.round(bounds.height);
	}

	getXPosition(node: Node): number {
		return Math.round(node.position.x);
	}

	getYPosition(node: Node): number {
		return Math.round(node.position.y);
	}

	getPosition(node: Node): { x: number; y: number } {
		return {
			x: this.getXPosition(node),
			y: this.getYPosition(node),
		};
	}
}

export const nodePosition = new NodePosition();
