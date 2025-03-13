import { ParagraphNodeComponent } from '@/shared/lib/node/component';
import { memo, useRef } from 'react';
import { NodeProps } from 'reactflow';
import { ResizeNodeComponent } from '../../utils/resize-node';
import { DeleteNodeComponent } from '../../utils/delete-node';
import { IsSelectedNode } from '../../utils/is-selected-node';
import clsx from 'clsx';

const minHeight = 52;
const paragraphLabel = 'Paragraph Label';

export const ParagraphNodeDisplay = (
	props: NodeProps<ParagraphNodeComponent>
) => {
	const { data } = props;
	const containerRef = useRef<HTMLDivElement>(null);

	const focusClassName = IsSelectedNode(props);

	const finalClassName = clsx(
		'relative group h-full w-full rounded-md bg-background border-[2px] flex justify-center items-center',
		focusClassName
	);

	return (
		<article
			className={finalClassName}
			style={{
				minHeight: minHeight,
				backgroundColor: data.dataTProps.blockProps?.backgroundColor,
				borderRadius: data.dataTProps.blockProps?.borderRadius,
				borderWidth: data.dataTProps.blockProps?.borderWidth,
				borderColor: data.dataTProps.blockProps?.borderColor,
				alignItems:
					data.dataTProps.textAlignmentProps?.textJustificationType,
				justifyContent:
					data.dataTProps.textAlignmentProps?.textAlignType,
			}}
		>
			<div ref={containerRef}>
				<p
					className="leading-none whitespace-pre-wrap text-nowrap  p-3 flex-shrink-0"
					style={{
						fontSize: data.dataTProps.fontProps?.fontSize,
						color: data.dataTProps.fontProps?.fontColor,
						fontWeight: data.dataTProps.fontProps?.fontWeight,
						padding: data.dataTProps.blockProps?.padding,
					}}
				>
					{data.dataTProps.labelProps.label || paragraphLabel}
				</p>
			</div>
			<DeleteNodeComponent node={props} />
			<ResizeNodeComponent ref={containerRef} minHeight={minHeight} />
		</article>
	);
};

export const ParagraphNodeMemo = memo(ParagraphNodeDisplay);
