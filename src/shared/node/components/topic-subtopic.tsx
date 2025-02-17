import { NodeProps } from 'reactflow';
import {
	CaptionsIcon,
	LinkIcon,
	MoveDownRightIcon,
	MoveDownLeftIcon,
	TimerIcon,
} from 'lucide-react';
import {
	SubTopicNodeComponent,
	TopicNodeComponent,
} from '@/shared/lib/node/component/classes/collectors/topic-node-component';
import { memo } from 'react';
import { ResizeNodeComponent } from '../utils/resize-node';

export const SubtopicNodeDisplay = (
	props: NodeProps<SubTopicNodeComponent | TopicNodeComponent>
) => {
	const { data } = props;
	return (
		<article
			className="bg-white rounded-md overflow-hidden border-[1px] h-full w-full relative flex flex-col"
			style={{
				backgroundColor: data.dataTProps.blockProps.backgroundColor,
			}}
		>
			<ResizeNodeComponent minWidth={150} minHeight={100} />
			<div>
				<div
					className="flex gap-1 justify-between bg-primary p-1 px-2"
					aria-label="topic-title"
				>
					<div className="flex gap-1 items-center bg-editor-chart_1 px-1 rounded-md flex-shrink-0">
						<CaptionsIcon className="text-primary-foreground" />
						<h3 className="text-md text-primary-foreground text-white">
							{data.componentType === TopicNodeComponent.name
								? 'Topic'
								: 'SubTopic'}
						</h3>
					</div>
					<div className="flex gap-1">
						<span className="bg-lime-400 text-center rounded-md px-3 text-black flex-shrink-0">
							low
						</span>
						<span className="bg-yellow-300 text-center px-3 rounded-md text-black flex-shrink-0">
							in progress
						</span>
						<span className="flex items-center bg-emerald-300 rounded-md px-1.5 gap-2 text-black">
							<LinkIcon width={20} height={20} />
							<span>21</span>
						</span>
					</div>
				</div>
			</div>
			{/* <div className="border-none">
				<span className="bg-secondary inline-flex gap-1 items-center px-3 py-1 rounded-b-md">
					<TimerIcon />
					15d:11h:34m remained
				</span>
			</div> */}
			<div className="flex flex-grow px-3 py-2 m-3 text-center flex-col justify-center">
				<p
					className="  text-black text-lg leading-none break-words whitespace-normal"
					style={{
						fontSize: data.dataTProps.fontProps?.fontSize,
						color: data.dataTProps.fontProps?.fontColor,
						fontWeight: data.dataTProps.fontProps?.fontWeight,
					}}
				>
					{data.dataTProps.label}
				</p>
			</div>
		</article>
	);
};

export const SubTopicNodeMemo = memo(SubtopicNodeDisplay);
