import { useProgressController } from '@/features/view/mode/graph/hook/use-progress-controller';
import { LinearTopicBlock } from './linear-topic-block';
import { buildLinearTree } from './utils';
import { GetPreviewCourseInfoQuery } from '@/shared/graphql/generated/output';

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

	const { visibleNodeIds } = useProgressController({
		nodes: safeNodes,
		edges: safeEdges,
		initialProgress: course?.progress ?? [],
	});

	const tree = buildLinearTree(safeNodes, safeEdges);
	return (
		<div className="p-6 flex flex-col gap-3">
			{tree.map((node) => (
				<LinearTopicBlock
					key={node.id}
					node={node}
					visibleNodeIds={visibleNodeIds}
				/>
			))}
		</div>
	);
};
