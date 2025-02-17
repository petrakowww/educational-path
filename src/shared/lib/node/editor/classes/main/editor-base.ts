import { getNodesBounds, Node } from 'reactflow';
import { getSelectedNode, setNodes, store } from '@/shared/managers';
import { setEditorStatusMenu } from '@/shared/managers';
import { GraphNodeComponent } from '../../../component';

export abstract class GraphNodeBaseEditor {
	static getEditedNode<T>(): Node<GraphNodeComponent<T>> | null {
		return getSelectedNode<T>(store.getState());
	}

	static close(): void {
		store.dispatch(setEditorStatusMenu(false));
	}

	static open(): void {
		store.dispatch(setEditorStatusMenu(true));
	}

	static autoSize(): void {
		const editedNode = this.getEditedNode();
		if (!editedNode) return;

		const updatedNode = {
			...editedNode,
			style: {
				...editedNode.style,
				width: '',
				height: '',
			},
		};

		const state = store.getState();
		const nodes = state.editor.nodes.map((node) =>
			node.id === editedNode.id ? updatedNode : node
		);

		store.dispatch(setNodes(nodes));
	}

	static getWidth(): number {
		const editedNode = this.getEditedNode();
		if (!editedNode) return 0;

		const bounds = getNodesBounds([editedNode]);
		return Math.round(bounds.width);
	}

	static getHeight(): number {
		const editedNode = this.getEditedNode();
		if (!editedNode) return 0;

		const bounds = getNodesBounds([editedNode]);
		return Math.round(bounds.height);
	}

	static getXPosition(): number {
		const editedNode = this.getEditedNode();
		return editedNode ? Math.round(editedNode.position.x) : 0;
	}

	static getYPosition(): number {
		const editedNode = this.getEditedNode();
		return editedNode ? Math.round(editedNode.position.y) : 0;
	}

	static getPosition(): { x: number; y: number } {
		return {
			x: this.getXPosition(),
			y: this.getYPosition(),
		};
	}
}
