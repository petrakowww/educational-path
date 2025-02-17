import { store, updateNodeLabel } from "@/shared/managers";
import { GraphNodeBaseEditor } from "./editor-base";


export class GraphNodeLabelEditor extends GraphNodeBaseEditor {
    static renameNode(value: string): void {
        const editedNode = this.getEditedNode();
        if (!editedNode) return;

        store.dispatch(updateNodeLabel({ id: editedNode.id, label: value }));
    }
}