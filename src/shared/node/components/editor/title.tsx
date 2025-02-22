import { TitleNodeComponent } from '@/shared/lib/node/component';
import { memo } from 'react';
import { NodeProps } from 'reactflow';
import { DeleteNodeComponent } from '../../utils/delete-node';
import { IsSelectedNode } from '../../utils/is-selected-node';
import clsx from 'clsx';

const minHeight = 52;

const titleLabel = 'Title Label';

export const TitleNodeDisplay = (props: NodeProps<TitleNodeComponent>) => {
	const { data } = props;

	const focusClassName = IsSelectedNode(props);

	const finalClassName = clsx(
		'relative group h-full w-full bg-background flex items-center justify-center border-[2px] rounded-md',
		focusClassName
	);

	return (
		<article className={finalClassName} style={{ minHeight: minHeight }}>
			<div>
				<p
					className="leading-none whitespace-normal text-nowrap text-center p-3 flex-shrink-0"
					style={{
						fontSize: data.dataTProps.fontProps?.fontSize,
					}}
				>
					{data.dataTProps.labelProps.label || titleLabel}
				</p>
			</div>

			<DeleteNodeComponent node={props} />
		</article>
	);
};

export const TitleNodeMemo = memo(TitleNodeDisplay);
