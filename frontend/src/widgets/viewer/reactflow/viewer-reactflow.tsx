import { useCallback, useEffect, useRef } from 'react';
import { useInitializeViewMap } from '@/features/node/viewer/hooks/use-initialization-view-map';
import { SkeletonReactFlow } from '../skeleton/viewer-react-flow-skeleton';
import ReactFlow, {
	Background,
	BackgroundVariant,
	Controls,
	MiniMap,
	useReactFlow,
	ReactFlowInstance,
} from 'reactflow';
import { nodeViewerComponents } from '@/shared/node/components/viewer/fabric/node-components';
import { edgeViewerType } from '@/shared/edge/config/edge.config';
import { GetPreviewCourseInfoQuery } from '@/shared/graphql/generated/output';
import { useNodeViewerStore } from '@/shared/managers/store/viewer/node-viewer.store';
import { useEdgeViewerStore } from '@/shared/managers/store/viewer/edge-viewer.store';
import { shallow } from 'zustand/shallow';
import { getNodeColorByType } from '@/features/node/utils/get-node-color-by-type';

interface ReactFlowViewerProps {
	nodes?: GetPreviewCourseInfoQuery['getUserTopicMap']['nodes'];
	edges?: GetPreviewCourseInfoQuery['getUserTopicMap']['edges'];
}

export const ReactFlowViewer = (props: ReactFlowViewerProps) => {
	const { nodes, edges } = props;
	const { isReady } = useInitializeViewMap({ nodes, edges });

	const { nodesStore } = useNodeViewerStore(
		(state) => ({ nodesStore: state.nodes }),
		shallow
	);

	const { edgesStore } = useEdgeViewerStore(
		(state) => ({ edgesStore: state.edges }),
		shallow
	);

	const flowRef = useRef<ReactFlowInstance | null>(null);

	// Когда карта готова — fit view вручную
	useEffect(() => {
		if (isReady && flowRef.current) {
			flowRef.current.fitView({ padding: 0.2 });
		}
	}, [isReady]);

	if (!isReady) return <SkeletonReactFlow />;

	return (
		<ReactFlow
			nodes={nodesStore}
			edges={edgesStore}
			nodeTypes={nodeViewerComponents}
			edgeTypes={edgeViewerType}
			nodesDraggable={false}
			nodesConnectable={false}
			elementsSelectable={false}
			zoomOnScroll
			defaultViewport={{ x: 0, y: 0, zoom: 1.2 }}
		>
			<Background variant={BackgroundVariant.Dots} gap={12} size={1} />
			<MiniMap
				pannable
				zoomable
				nodeColor={(n) => getNodeColorByType(n.type)}
			/>
			<Controls position="top-right" showInteractive={true} />
		</ReactFlow>
	);
};
