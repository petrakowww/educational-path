import { useEdgeStore } from "@/shared/managers/store/editor/edge-editor.store";
import { useNodeStore } from "@/shared/managers/store/editor/nodes-editor.store";

export const deleteIsolatedNodes = () => {
	const { nodesList, setNodes } = useNodeStore.getState();
	const { edges } = useEdgeStore.getState();

	const connectedNodeIds = new Set<string>();
	edges.forEach((edge) => {
		connectedNodeIds.add(edge.source);
		connectedNodeIds.add(edge.target);
	});

	const remainingNodes = nodesList.filter((node) => connectedNodeIds.has(node.id));

	setNodes(remainingNodes);
};
