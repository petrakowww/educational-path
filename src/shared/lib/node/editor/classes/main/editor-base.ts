import { getNodesBounds, Node } from 'reactflow';
import {
	deleteNode,
	getSelectedNode,
	setNodes,
	store,
	updateNode,
} from '@/shared/managers';
import { setEditorStatusMenu } from '@/shared/managers';
import {
	GraphNodeAlignmentTextProps,
	GraphNodeBlockProps,
	GraphNodeComponent,
	GraphNodeFontProps,
} from '../../../component';

interface GraphNodeBaseEditorAllStyles {
	editedNode: Node<
		GraphNodeComponent<
			Partial<
				GraphNodeFontProps &
					GraphNodeBlockProps &
					GraphNodeAlignmentTextProps
			>
		>
	>;
}

export abstract class GraphNodeBaseEditor {
	static getEditedNode<T>(): Node<GraphNodeComponent<T>> | null {
		return getSelectedNode<T>(store.getState());
	}

	static getCurrentIdNode(): string | null {
		return store.getState().editor.selectedNodeId;
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

	protected static dispatchIfEdited<T extends { id: string }>(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		actionCreator: (payload: T) => any,
		payload: Omit<T, 'id'>
	): void {
		const editedNode = this.getEditedNode();
		if (!editedNode) return;
		store.dispatch(actionCreator({ id: editedNode.id, ...payload } as T));
	}

	static deleteNode(id: string): void {
		const shouldCloseEditor = this.isDeletingSelectedNode(id);

		store.dispatch(deleteNode(id));

		if (shouldCloseEditor) {
			console.log('close node!');
			this.close();
		}
	}

	static isDeletingSelectedNode(id: string): boolean {
		const currentNodeId = this.getCurrentIdNode();
		if (!currentNodeId) return false;

		return id === currentNodeId;
	}

	static resetNodeStyles({ editedNode }: GraphNodeBaseEditorAllStyles) {
		const keysToReset: (keyof (GraphNodeFontProps &
			GraphNodeBlockProps &
			GraphNodeAlignmentTextProps))[] = [
			'fontProps',
			'blockProps',
			'textAlignmentProps',
		];

		const updatedNode = {
			...editedNode,
			data: {
				...editedNode.data,
				dataTProps: {
					...editedNode.data.dataTProps,
				},
			},
		};

		keysToReset.forEach((key) => {
			const target = updatedNode.data.dataTProps[key];
			if (target && typeof target === 'object') {
				updatedNode.data.dataTProps[key] = Object.fromEntries(
					Object.keys(target).map((nestedKey) => [
						nestedKey,
						undefined,
					])
				) as typeof target;
			}
		});

		store.dispatch(updateNode(updatedNode));
	}
}
