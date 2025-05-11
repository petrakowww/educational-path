import { useEffect, useState, useRef } from 'react';
import { shallow } from 'zustand/shallow';
import { GetPreviewCourseInfoQuery } from '@/shared/graphql/generated/output';
import { defaultEdgeConfig } from '@/shared/edge/config/edge.config';
import { Node, Edge } from 'reactflow';
import { useNodeViewerStore } from '@/shared/managers/store/viewer/node-viewer.store';
import { deserializeNode } from '../../utils/node-deserialize';
import { useEdgeViewerStore } from '@/shared/managers/store/viewer/edge-viewer.store';

interface IInitializationViewMap {
	nodes?: GetPreviewCourseInfoQuery['getUserTopicMap']['nodes'];
	edges?: GetPreviewCourseInfoQuery['getUserTopicMap']['edges'];
	visibleNodeIds?: Set<string>;
	courseMode?: string;
}

export const useInitializeViewMap = (props: IInitializationViewMap) => {
	const { nodes, edges, visibleNodeIds, courseMode } = props;
	const [ready, setReady] = useState(false);

	const prevNodes = useRef<unknown[]>([]);
	const prevEdges = useRef<unknown[]>([]);
	const prevMode = useRef<string | undefined>(undefined);

	const { setNodes } = useNodeViewerStore((state) => ({ setNodes: state.setNodes }), shallow);
	const { setEdges } = useEdgeViewerStore((state) => ({ setEdges: state.setEdges }), shallow);

	useEffect(() => {
		if (!nodes || !edges) return;

		prevNodes.current = nodes;
		prevEdges.current = edges;
		prevMode.current = courseMode;

		const enhance = (node: Node): Node => {
			const nodeId = String(node.id);
			const isBlocked = visibleNodeIds && !visibleNodeIds.has(nodeId);
			return {
				...node,
				id: nodeId,
				data: {
					...node.data,
					isBlocked,
				},
			};
		};

		const nodesMapped: Node[] = nodes.map((n) => deserializeNode(n, enhance));
		const edgesMapped: Edge[] = edges.map((edge) => ({
			...defaultEdgeConfig,
			id: edge.id,
			source: edge.sourceId,
			target: edge.targetId,
			...(edge.meta ? JSON.parse(edge.meta) : {}),
		}));

		setNodes(nodesMapped);
		setEdges(edgesMapped);
		setReady(true);
	}, [nodes, edges, visibleNodeIds, courseMode, setNodes, setEdges]);

	return { isReady: ready };
};

