import { useEditorAsideStore } from "@/shared/managers/store/editor.store";
import { useNodeStore } from "@/shared/managers/store/nodes.store";

const setEditorStatusMenu = useEditorAsideStore.getState().setEditorStatusMenu;

export abstract class NodeDeleter {
	constructor(protected nodeId: string) {}

	public delete(): void {
		this.beforeDelete();
		this.deleteNode();
		this.afterDelete();
	}

	protected beforeDelete(): void {}
	protected afterDelete(): void {}

	protected deleteNode(): void {
		const {selectedNode, deleteNode} = useNodeStore.getState();
		console.log(this.nodeId);
		deleteNode(this.nodeId);

		if (selectedNode && selectedNode.id === this.nodeId) {
			setEditorStatusMenu(false);
		}
	}
}

export class BaseNodeDeleter extends NodeDeleter {}
