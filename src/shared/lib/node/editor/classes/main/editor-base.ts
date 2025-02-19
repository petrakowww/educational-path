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
	NodeLabelEnum,
	ParagraphNodeComponent,
	SubTopicNodeComponent,
	TitleNodeComponent,
	TopicNodeComponent,
} from '../../../component';
import { GraphNodeBaseEditorAllStyles } from '../../interfaces/main/editor-styles';

export abstract class GraphNodeBaseEditor {
	static nodeRegistry = {
		[NodeLabelEnum.topic]: TopicNodeComponent,
		[NodeLabelEnum.subtopic]: SubTopicNodeComponent,
		[NodeLabelEnum.title]: TitleNodeComponent,
		[NodeLabelEnum.paragraph]: ParagraphNodeComponent,
	};
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

	static createGraphNode<
		T extends keyof typeof GraphNodeBaseEditor.nodeRegistry,
	>(type: T, position?: { x: number; y: number }) {
		const NodeClass = GraphNodeBaseEditor.nodeRegistry[type];

		const data = { ...new NodeClass() };

		return {
			id: crypto.randomUUID(),
			type: type,
			position: position ?? { x: 0, y: 0 },
			data,
		};
	}

	static isValidNodeType(
		type: NodeLabelEnum
	): type is keyof typeof GraphNodeBaseEditor.nodeRegistry {
		return type in GraphNodeBaseEditor.nodeRegistry;
	}

	static isDeletingSelectedNode(id: string): boolean {
		const currentNode = this.getEditedNode();
		if (!currentNode) return false;

		return id === currentNode.id;
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
