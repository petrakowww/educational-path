import { useEffect, useState, useRef } from 'react';
import { shallow } from 'zustand/shallow';
import { GetPreviewCourseInfoQuery, CourseModeType } from '@/shared/graphql/generated/output';
import { defaultEdgeConfig } from '@/shared/edge/config/edge.config';
import { Node, Edge } from 'reactflow';
import { useNodeViewerStore } from '@/shared/managers/store/viewer/node-viewer.store';
import { useEdgeViewerStore } from '@/shared/managers/store/viewer/edge-viewer.store';
import { useViewerStore } from '@/shared/managers/store/viewer/view.store';
import { deserializeNode } from '../../utils/node-deserialize';

function shallowEqualArrays<T>(a: T[], b: T[]) {
	if (a.length !== b.length) return false;
	return a.every((val, index) => val === b[index]);
}

interface IInitializationViewMap {
	nodes?: GetPreviewCourseInfoQuery['getUserTopicMap']['nodes'];
	edges?: GetPreviewCourseInfoQuery['getUserTopicMap']['edges'];
	visibleNodeIds?: Set<string>;
}

export const useInitializeViewMap = (props: IInitializationViewMap) => {
	const { nodes, edges, visibleNodeIds } = props;
	const [ready, setReady] = useState(false);

	const prevNodes = useRef<unknown[]>([]);
	const prevEdges = useRef<unknown[]>([]);
	const prevVisibleCount = useRef<number>(0);
	const prevMode = useRef<CourseModeType | null>(null);

	const { setNodes } = useNodeViewerStore((state) => ({ setNodes: state.setNodes }), shallow);
	const { setEdges } = useEdgeViewerStore((state) => ({ setEdges: state.setEdges }), shallow);

	const courseMode = useViewerStore((s) => s.courseMode);

	useEffect(() => {
		if (!nodes || !edges || !visibleNodeIds) return;

		const visibleCount = visibleNodeIds.size;
		const shouldUpdate =
			!shallowEqualArrays(prevNodes.current, nodes) ||
			!shallowEqualArrays(prevEdges.current, edges) ||
			(courseMode === CourseModeType.Strict && visibleCount !== prevVisibleCount.current) ||
			prevMode.current !== courseMode;

		if (!shouldUpdate) return;

		prevNodes.current = nodes;
		prevEdges.current = edges;
		prevVisibleCount.current = visibleCount;
		prevMode.current = courseMode;

		const enhance = (node: Node): Node => {
			const nodeId = String(node.id);
			const isBlocked = !visibleNodeIds.has(node.id);

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
