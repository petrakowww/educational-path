import { useModeController } from '@/features/view/mode/graph/hook/use-mode-controller';
import { buildLinearTree } from './utils';
import { GetPreviewCourseInfoQuery } from '@/shared/graphql/generated/output';
import { LinearNodeFactory } from './components/linear-factory';

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

	const tree = buildLinearTree(safeNodes, safeEdges);
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
