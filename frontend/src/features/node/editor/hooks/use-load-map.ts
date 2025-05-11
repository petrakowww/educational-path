import { useEffect, useState } from 'react';
import { useGetTopicMapLazyQuery } from '@/shared/graphql/generated/output';
import { useNodeStore } from '@/shared/managers/store/editor/nodes-editor.store';
import { useEdgeStore } from '@/shared/managers/store/editor/edge-editor.store';
import { deserializeNode } from '../../utils/node-deserialize';
import { defaultEdgeConfig } from '@/shared/edge/config/edge.config';

export const useLoadTopicMapById = () => {
	const { setNodes } = useNodeStore();
	const { setEdges } = useEdgeStore();

	const [load, { data, loading, error }] = useGetTopicMapLazyQuery();
	const [isReady, setIsReady] = useState(false);

	const loadByRouteId = (routeId: string) => {
		setIsReady(false);
		load({ variables: { routeId }, fetchPolicy: 'network-only' });
	};

	useEffect(() => {
		if (!data?.getTopicMap || isReady) return;

		const { nodes, edges } = data.getTopicMap;

		setNodes(nodes.map((n) => deserializeNode(n)));

		setEdges(
			edges.map((edge) => ({
				...defaultEdgeConfig,
				...(edge.meta ? JSON.parse(edge.meta) : {}),
				id: edge.id,
				source: edge.sourceId,
				target: edge.targetId,
			}))
		);

		setIsReady(true);
	}, [data, setNodes, setEdges, isReady]);

	return { loadByRouteId, loading, error, isReady };
};
