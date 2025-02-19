import { ParagraphNodeComponent } from '@/shared/lib/node/component';
import { memo, useRef } from 'react';
import { NodeProps } from 'reactflow';
import { ResizeNodeComponent } from '../utils/resize-node';
import { DeleteNodeComponent } from '../utils/delete-node';

const minHeight = 52;

export const ParagraphNodeDisplay = (
	props: NodeProps<ParagraphNodeComponent>
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
					borderRadius: data.dataTProps.blockProps?.borderRadius,
					borderWidth: data.dataTProps.blockProps?.borderWidth,
					borderColor: data.dataTProps.blockProps?.borderColor,
					alignItems:
						data.dataTProps.textAlignmentProps
							?.textJustificationType,
				}}
			>
				<p
					className="leading-none whitespace-normal text-center p-4 flex-shrink-0"
					style={{
						fontSize: data.dataTProps.fontProps?.fontSize,
						color: data.dataTProps.fontProps?.fontColor,
						fontWeight: data.dataTProps.fontProps?.fontWeight,
						textAlign:
							data.dataTProps.textAlignmentProps?.textAlignType,
						padding: data.dataTProps.blockProps?.padding,
					}}
					ref={containerRef}
				>
					{data.dataTProps.label}
				</p>
				<ResizeNodeComponent ref={containerRef} minHeight={minHeight} />
			</div>
			<DeleteNodeComponent node={props} />
		</article>
	);
};

export const ParagraphNodeMemo = memo(ParagraphNodeDisplay);
