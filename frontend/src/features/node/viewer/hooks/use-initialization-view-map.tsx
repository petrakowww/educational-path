import { useEffect, useState } from 'react';
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
}

export const useInitializeViewMap = (props: IInitializationViewMap) => {
	const { nodes, edges } = props;
	const [ready, setReady] = useState(false);

	const { setNodes } = useNodeViewerStore(
		(state) => ({ setNodes: state.setNodes }),
		shallow
	);
	const { setEdges } = useEdgeViewerStore(
		(state) => ({ setEdges: state.setEdges }),
		shallow
	);

	useEffect(() => {
		if (ready || !nodes || !edges) return;

		const nodesMapped: Node[] = nodes.map(deserializeNode);
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
	}, [nodes, edges, ready, setNodes, setEdges]);

	return { isReady: ready };
};

