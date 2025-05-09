import { useEffect, useState } from 'react';
import { useGetTopicMapQuery } from '@/shared/graphql/generated/output';
import { useNodeStore } from '@/shared/managers/store/nodes.store';
import { useEdgeStore } from '@/shared/managers/store/edge.store';
import { Node, Edge } from 'reactflow';
import { useParams } from 'next/navigation';
import { shallow } from 'zustand/shallow';
import { deserializeNode } from './utils';
import { defaultEdgeConfig } from '@/shared/edge/config/edge.config';

export const useInitializationMap = () => {
	const params = useParams<{ id: string }>();
	const routeId = params?.id;

	const [isReady, setIsReady] = useState(false);

	const { setNodes } = useNodeStore(
		(state) => ({ setNodes: state.setNodes }),
		shallow
	);
	const { setEdges } = useEdgeStore(
		(state) => ({ setEdges: state.setEdges }),
		shallow
	);

	const skipQuery = !routeId || typeof routeId !== 'string';

	const { data, loading, error } = useGetTopicMapQuery({
		variables: { routeId: routeId as string },
		skip: skipQuery,
		notifyOnNetworkStatusChange: true,
	});

	useEffect(() => {
		if (skipQuery || !data?.getTopicMap || isReady) return;

		const map = data.getTopicMap;

		const nodes: Node[] = map.nodes.map(deserializeNode);
		const edges: Edge[] = map.edges.map((edge) => {
			const meta = edge.meta ? JSON.parse(edge.meta) : {};
			return {
				...defaultEdgeConfig,
				...meta,
				id: edge.id,
				source: edge.sourceId,
				target: edge.targetId,
			};
		});

		setNodes(nodes);
		setEdges(edges);

		setIsReady(true);
	}, [data, setNodes, setEdges, skipQuery, isReady]);

	return { loading, error, isReady: !skipQuery && isReady };
};
