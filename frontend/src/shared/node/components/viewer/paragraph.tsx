import { NodeMain } from '@/features/node/editor/types/node';
import { NodeProps } from 'reactflow';
import { memo } from 'react';
import { EdgeConnectableViewNodes } from './base/edge-connectable-view';
import { SkeletonViewNode } from './base/skeleton-view-node';

export const ParagraphViewNode = (props: NodeProps<NodeMain>) => {
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
				alignItems: data.meta.fontProps?.justification,
				justifyContent: data.meta.fontProps?.textAlign,
			}}
		>
			<EdgeConnectableViewNodes nodeProps={props} canHandle={true}>
				<p
					className="leading-none whitespace-pre-wrap break-all p-3"
					style={{
						fontSize: data.meta.fontProps?.fontSize,
						color: data.meta.fontProps?.fontColor as string,
						fontWeight: data.meta.fontProps?.fontWeight,
						padding: data.meta.blockProps?.padding as number,
					}}
				>
					{data.title}
				</p>
			</EdgeConnectableViewNodes>
		</SkeletonViewNode>
	);
};

export const ParagraphViewNodeMemo = memo(ParagraphViewNode);
