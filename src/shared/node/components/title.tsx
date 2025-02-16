import { TitleNodeComponent } from '@/shared/lib/node/component';
import { memo } from 'react';
import { NodeProps } from 'reactflow';
import { ResizeNodeComponent } from '../utils/resize-node';

export const TitleNodeDisplay = (props: NodeProps<TitleNodeComponent>) => {
	const { data } = props;
	return (
		<div
			className="rounded-md overflow-hidden border-[1px] h-full w-full bg-background relative p-4 flex items-center justify-center"
			style={{
				width: '',
				height: '',
				backgroundColor: data.blockProps?.backgroundColor,
				borderColor: data.blockProps?.borderColor,
				borderWidth: data.blockProps?.borderWidth,
				borderRadius: data.blockProps?.borderRadius,
			}}
		>
			<ResizeNodeComponent minHeight={50} minWidth={104} />
			<p
				className="leading-none break-words whitespace-normal text-center"
				style={{
					fontSize: data.fontProps?.fontSize,
					color: data.fontProps?.textColor,
					fontWeight: data.fontProps?.fontWeight,
				}}
			>
				{data.label}
			</p>
		</div>
	);
};

export const TitleNodeMemo = memo(TitleNodeDisplay);
