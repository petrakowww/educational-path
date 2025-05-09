import { memo } from 'react';
import { NodeProps } from 'reactflow';
import {
	NodeDataShapeSubTopic,
	NodeDataShapeTopic,
} from '@/features/node/editor/types/node';
import { SkeletonViewNode } from './base/skeleton-view-node';
import { EdgeConnectableViewNodes } from './base/edge-connectable-view';

export const TopicViewNode = (
	props: NodeProps<NodeDataShapeTopic | NodeDataShapeSubTopic>
) => {
	const { data } = props;

	return (
		<SkeletonViewNode
			nodeProps={props}
			style={{
				backgroundColor: data.meta.blockProps
					?.backgroundColor as string,
				borderRadius: data.meta.blockProps?.borderRadius,
				borderWidth: data.meta.blockProps?.borderWidth as number,
				borderColor: data.meta.blockProps?.borderColor as string,
			}}
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
