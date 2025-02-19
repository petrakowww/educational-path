import { TitleNodeComponent } from '@/shared/lib/node/component';
import { memo } from 'react';
import { NodeProps } from 'reactflow';
import { ResizeNodeComponent } from '../utils/resize-node';
import { DeleteNodeComponent } from '../utils/delete-node';
import { useRef } from 'react';

const minHeight = 52;

export const TitleNodeDisplay = (props: NodeProps<TitleNodeComponent>) => {
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
				<ResizeNodeComponent
					minHeight={minHeight}
					ref={containerRef}
				/>
			</div>

			<DeleteNodeComponent node={props} />
		</article>
	);
};

export const TitleNodeMemo = memo(TitleNodeDisplay);
