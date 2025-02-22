import { ParagraphNodeComponent } from '@/shared/lib/node/component';
import { memo, useRef } from 'react';
import { NodeProps } from 'reactflow';
import { ResizeNodeComponent } from '../../utils/resize-node';
import { DeleteNodeComponent } from '../../utils/delete-node';
import { IsSelectedNode } from '../../utils/is-selected-node';
import clsx from 'clsx';

const minHeight = 52;
const minWidth = 52;
const paragraphLabel = 'Paragraph Label';

export const ParagraphNodeDisplay = (
	props: NodeProps<ParagraphNodeComponent>
) => {
	const { data } = props;
	const containerRef = useRef<HTMLDivElement>(null);

	const focusClassName = IsSelectedNode(props);

	const finalClassName = clsx(
		'rounded-md overflow-hidden min-h-fit min-w-fit h-full w-full bg-transparent relative flex items-center justify-center',
		focusClassName
	);

	return (
		<article
			className="relative group min-h-fit min-w-fit h-full w-full inline-block"
			style={{ minHeight: minHeight }}
		>
			<div
				className={finalClassName}
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
					className="leading-none whitespace-pre-wrap text-nowrap  text-center px-3 flex-shrink-0"
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
					{data.dataTProps.labelProps.label || paragraphLabel}
				</p>
				<ResizeNodeComponent
					ref={containerRef}
					minHeight={minHeight}
					minWidth={minWidth}
					ignoreFitContent={true}
				/>
			</div>
			<DeleteNodeComponent node={props} />
		</article>
	);
};

export const ParagraphNodeMemo = memo(ParagraphNodeDisplay);
