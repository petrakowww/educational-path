import { GlobalGraphNodeTypesComponents } from "@/shared/lib/node/component";
import { Node } from "reactflow";

export interface NodeInterface {
    selectedNodeId: string | null;
    nodes: Node<GlobalGraphNodeTypesComponents>[];
}