import { NodeProps } from 'reactflow';
import {
	CaptionsIcon,
	LinkIcon,
	MoveDownRightIcon,
	MoveDownLeftIcon,
	TimerIcon,
	Trash2Icon,
} from 'lucide-react';
import {
	SubTopicNodeComponent,
	TopicNodeComponent,
} from '@/shared/lib/node/component/classes/collectors/topic-node-component';
import { memo } from 'react';
import { ResizeNodeComponent } from '../utils/resize-node';
import { DeleteNodeComponent } from '../utils/delete-node';
import { useRef } from 'react';

const minHeight = 52;

export const SubtopicNodeDisplay = (
	props: NodeProps<SubTopicNodeComponent | TopicNodeComponent>
) => {
	const { data } = props;

	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<article
			className="relative group min-h-fit min-w-fit h-full w-full inline-block"
			style={{ minHeight: minHeight }}
		>
			<div
				className="rounded-md overflow-hidden border-[1px] min-h-fit min-w-fit h-full w-full bg-background relative flex items-center justify-center"
				style={{
					width: '',
					height: '',
					backgroundColor:
						data.dataTProps.blockProps?.backgroundColor,
				}}
			>
				<p
					className="leading-none whitespace-normal text-center p-4 flex-shrink-0"
					style={{
						fontSize: data.dataTProps.fontProps?.fontSize,
					}}
					ref={containerRef}
				>
					{data.dataTProps.label}
				</p>
				<ResizeNodeComponent minHeight={minHeight} ref={containerRef} />
			</div>

			<DeleteNodeComponent node={props} />
		</article>
	);
};

export const SubTopicNodeMemo = memo(SubtopicNodeDisplay);
