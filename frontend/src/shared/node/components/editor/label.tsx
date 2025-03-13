import { LabelNodeComponent } from '@/shared/lib/node/component';
import { memo } from 'react';
import { NodeProps } from 'reactflow';
import { DeleteNodeComponent } from '../../utils/delete-node';
import { IsSelectedNode } from '../../utils/is-selected-node';
import clsx from 'clsx';

const minHeight = 52;
const label = 'Label';

export const LabelNodeDisplay = (props: NodeProps<LabelNodeComponent>) => {
	const { data } = props;

	const focusClassName = IsSelectedNode(props);

	const finalClassName = clsx(
		'relative group h-full w-full bg-background flex items-center justify-center border-[2px] rounded-md',
		focusClassName
	);

	return (
		<article className={finalClassName} style={{ minHeight: minHeight }}>
			<div className="p-3">
				<p
					className="leading-none whitespace-pre-wrap text-nowrap text-center flex-shrink-0"
					style={{
						fontSize: data.dataTProps.fontProps?.fontSize,
						color: data.dataTProps?.fontProps.fontColor,
					}}
				>
					{data.dataTProps.labelProps.label || label}
				</p>
			</div>

			<DeleteNodeComponent node={props} />
		</article>
	);
};

export const LabelNodeMemo = memo(LabelNodeDisplay);
