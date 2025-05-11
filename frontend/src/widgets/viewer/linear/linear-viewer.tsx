import { useModeController } from '@/features/view/mode/graph/hook/use-mode-controller';
import { buildLinearTree } from './utils/build-tree';
import { GetPreviewCourseInfoQuery } from '@/shared/graphql/generated/output';
import { LinearNodeFactory } from './components/linear-factory';
import { useInitializeViewMap } from '@/features/node/viewer/hooks/use-initialization-view-map';
import { useViewerStore } from '@/shared/managers/store/viewer/view.store';
import { useNodeViewerStore } from '@/shared/managers/store/viewer/node-viewer.store';
import { useEdgeViewerStore } from '@/shared/managers/store/viewer/edge-viewer.store';
import { shallow } from 'zustand/shallow';

interface LinearViewViewerProps {
	nodes?: GetPreviewCourseInfoQuery['getUserTopicMap']['nodes'];
	edges?: GetPreviewCourseInfoQuery['getUserTopicMap']['edges'];
	course?: GetPreviewCourseInfoQuery['getUserTopicMap']['userCourse'];
}

export const LinearViewViewer = ({
	nodes,
	edges,
	course,
}: LinearViewViewerProps) => {
	const safeNodes = nodes ?? [];
	const safeEdges = edges ?? [];

	const { visibleNodeIds } = useModeController({
		nodes: safeNodes,
		edges: safeEdges,
		initialProgress: course?.progress ?? [],
	});

	const { isReady } = useInitializeViewMap({
		nodes,
		edges,
		visibleNodeIds,
	});

	const { nodesStore } = useNodeViewerStore(
		(state) => ({ nodesStore: state.nodes }),
        (a, b) => (a.nodesStore.length === b.nodesStore.length)
	);

	const { edgesStore } = useEdgeViewerStore(
		(state) => ({ edgesStore: state.edges }),
		(a, b) => (a.edgesStore.length === b.edgesStore.length)
	);

	const tree = buildLinearTree(nodesStore, edgesStore);
	return (
		<div className="p-6 flex flex-col gap-3">
			{tree.map((node) => (
				<LinearNodeFactory
					key={node.id}
					node={node}
					visibleNodeIds={visibleNodeIds}
				/>
			))}
		</div>
	);
};
