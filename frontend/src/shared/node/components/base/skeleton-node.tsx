import { ReactNode } from 'react';
import clsx, { ClassValue } from 'clsx';
import { NodeProps } from 'reactflow';
import { IsSelectedNode } from '../../utils/is-selected-node';
import { CSSProperties } from 'react';

interface SkeletonNodeProps<T = unknown> {
	children: ReactNode;
	nodeProps: NodeProps<T>;
	stylesForComponent?: ClassValue;
	style?: CSSProperties;
}

export const SkeletonNode = ({
	children,
	nodeProps,
	stylesForComponent,
	style
}: SkeletonNodeProps) => {
	const inTheFocus = IsSelectedNode(nodeProps);

	return (
		<article
			className={clsx(
				'relative group h-full w-full bg-background flex items-center justify-center border-[2px] rounded-md',
				inTheFocus && 'outline outline-offset-2 outline-solid outline-[3px] outline-primary',
				stylesForComponent
			)}
			style={style}
		>
			{children}
		</article>
	);
};
