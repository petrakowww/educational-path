import { memo, useCallback } from 'react';
import { NodeProps } from 'reactflow';
import {
	NodeDataShapeSubTopic,
	NodeDataShapeTopic,
} from '@/features/node/editor/types/node';
import { SkeletonViewNode } from './base/skeleton-view-node';
import { EdgeConnectableViewNodes } from './base/edge-connectable-view';
import { useViewerStore } from '@/shared/managers/store/viewer/view.store';
import { useNodeViewerStore } from '@/shared/managers/store/viewer/node-viewer.store';
import { useTopicCompletionStatus } from '@/features/view/hooks/use-topic-completion-status';

export const TopicViewNode = (
	props: NodeProps<NodeDataShapeTopic | NodeDataShapeSubTopic>
) => {
	const { data, id } = props;
	const toggleSidebar = useViewerStore((s) => s.toggleSidebar);
	const setSelectedNodeId = useNodeViewerStore((s) => s.setSelectedNodeId);
	const { isCompleted } = useTopicCompletionStatus(id);

	const handleClick = useCallback(
		(e: React.MouseEvent) => {
			e.stopPropagation();
			setSelectedNodeId(id);
			toggleSidebar();
		},
		[id, setSelectedNodeId, toggleSidebar]
	);

	return (
		<SkeletonViewNode
			nodeProps={props}
			onClick={handleClick}
			style={{
				backgroundColor: data.meta.blockProps?.backgroundColor as string,
				borderRadius: data.meta.blockProps?.borderRadius,
				borderWidth: data.meta.blockProps?.borderWidth as number,
				borderColor: data.meta.blockProps?.borderColor as string,
			}}
			isCompleted={isCompleted}
		>
			<EdgeConnectableViewNodes nodeProps={props} canHandle={true}>
				<p
					className="leading-none whitespace-pre-wrap text-center p-3 flex-shrink-0 text-nowrap"
					style={{
						fontSize: data.meta.fontProps?.fontSize,
						color: data.meta.fontProps?.fontColor as string,
						fontWeight: data.meta.fontProps?.fontWeight,
					}}
				>
					{data.title}
				</p>
			</EdgeConnectableViewNodes>
		</SkeletonViewNode>
	);
};

export const TopicViewNodeMemo = memo(TopicViewNode);
