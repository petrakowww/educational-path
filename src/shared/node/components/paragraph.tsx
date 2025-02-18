import { ParagraphNodeComponent } from '@/shared/lib/node/component';
import { memo } from 'react';
import { NodeProps } from 'reactflow';
import { ResizeNodeComponent } from '../utils/resize-node';
import { DeleteNodeComponent } from '../utils/delete-node';

export const ParagraphNodeDisplay = (
	props: NodeProps<ParagraphNodeComponent>
) => {
	const { data } = props;
	return (
		<div className='className="relative group h-full w-full"'>
			<div
				className="rounded-md overflow-hidden border-[1px] h-full w-full bg-background relative p-4 flex items-center justify-center"
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
					className="leading-none whitespace-normal text-center flex-shrink-0"
					style={{
						fontSize: data.dataTProps.fontProps?.fontSize,
						color: data.dataTProps.fontProps?.fontColor,
						fontWeight: data.dataTProps.fontProps?.fontWeight,
						textAlign:
							data.dataTProps.textAlignmentProps?.textAlignType,
					}}
				>
					{data.dataTProps.label}
				</p>
			</div>
			<ResizeNodeComponent minHeight={52} minWidth={169} />
			<DeleteNodeComponent node={props} />
		</div>
	);
};

export const ParagraphNodeMemo = memo(ParagraphNodeDisplay);
