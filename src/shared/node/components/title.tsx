import { TitleNodeComponent } from '@/shared/lib/node/component';
import { memo } from 'react';
import { NodeProps } from 'reactflow';
import { ResizeNodeComponent } from '../utils/resize-node';
import { DeleteNodeComponent } from '../utils/delete-node';

export const TitleNodeDisplay = (props: NodeProps<TitleNodeComponent>) => {
	const { data } = props;
	return (
		<div className="relative group h-full w-full">
			<div
				className="rounded-md overflow-hidden border-[1px] h-full w-full bg-background relative p-4 flex items-center justify-center"
				style={{
					width: '',
					height: '',
				}}
			>
				
				<p
					className="leading-none break-words whitespace-normal text-center"
					style={{
						fontSize: data.dataTProps.fontProps?.fontSize,
					}}
				>
					{data.dataTProps.label}
				</p>
			</div>
			<ResizeNodeComponent minHeight={50} minWidth={104} />
			<DeleteNodeComponent node={props} />
		</div>
	);
};

export const TitleNodeMemo = memo(TitleNodeDisplay);
