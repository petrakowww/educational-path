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
		'rounded-md overflow-hidden border-[2px] min-h-fit min-w-fit h-full w-full bg-background relative flex items-center justify-center',
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
				}}
			>
				<p
					className="leading-none whitespace-normal text-center p-4 flex-shrink-0"
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
