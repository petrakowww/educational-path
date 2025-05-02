import { memo } from 'react';
import { NodeProps } from 'reactflow';
import { DeleteNodeComponent } from '../utils/delete-node';
import { IsSelectedNode } from '../utils/is-selected-node';
import clsx from 'clsx';
import { NodeDataShape } from '@/features/node/editor/types/node';

export const TitleNode = (props: NodeProps<NodeDataShape>) => {
	const { data } = props;

	const focusClassName = IsSelectedNode(props);

	const finalClassName = clsx(
		'relative group h-full w-full bg-background flex items-center justify-center border-[2px] rounded-md',
		focusClassName
	);

	return (
		<article className={finalClassName}>
			<div>
				<p
					className="leading-none whitespace-normal text-nowrap text-center p-3 flex-shrink-0"
					style={{
						fontSize: data.fontProps?.fontSize,
					}}
				>
					{data.labelProps?.label}
				</p>
			</div>

			<DeleteNodeComponent node={props} />
		</article>
	);
};

export const TitleNodeMemo = memo(TitleNode);
