import { useState } from 'react';
import { NodeType } from '@/features/node/editor/types/node';
import { isManualNode } from '@/shared/node/utils/is-openable-node';
import { IsSelectedViewNode } from '@/shared/node/utils/is-selected-node';
import clsx, { ClassValue } from 'clsx';
import { ReactNode, CSSProperties } from 'react';
import { NodeProps } from 'reactflow';
import { CheckCircle } from 'lucide-react';

type NodeBlocked = {
	isBlocked: boolean;
};

interface SkeletonViewNodeProps<T = NodeBlocked> {
	children: ReactNode;
	nodeProps: NodeProps<T>;
	stylesForComponent?: ClassValue;
	style?: CSSProperties;
	isCompleted?: boolean;
	onClick?: (e: React.MouseEvent) => void;
}

export const SkeletonViewNode = <T,>({
	children,
	nodeProps,
	stylesForComponent,
	style,
	isCompleted,
	onClick,
}: SkeletonViewNodeProps<T>) => {
	const isSelected = IsSelectedViewNode(nodeProps);
	const [isHovered, setHovered] = useState(false);

	const isClickable =
		isManualNode(nodeProps.type) || nodeProps.type === NodeType.button;

	const data = nodeProps.data as NodeBlocked | undefined;
	const isBlocked = data?.isBlocked ?? false;

	const baseStyle: CSSProperties = {
		...style,
		pointerEvents: isBlocked ? 'none' : 'all',
		transition: 'all 0.3s ease-in-out',
		backgroundColor: isCompleted ? '' : style?.backgroundColor,
		...(isHovered &&
			!isSelected &&
			!isBlocked && {
				borderColor: '#16a34a',
				boxShadow: '0px 0px 15px 1px rgba(153,153,153,0.61)',
			}),
	};

	return (
		<article
			className={clsx(
				'relative group h-full w-full flex items-center justify-center border-[2px] rounded-md',
				'transition-all duration-300 ease-in-out bg-background',
				isBlocked &&
					'opacity-50 grayscale blur-[1px] pointer-events-none',
				isSelected &&
					'outline outline-offset-2 outline-[3px] outline-primary',
				isClickable && 'cursor-pointer',
				isCompleted && 'bg-secondary',
				stylesForComponent
			)}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			style={baseStyle}
			onClick={onClick}
		>
			{children}
			{isCompleted && (
				<CheckCircle className="absolute top-1 right-1 w-4 h-4 text-primary" />
			)}
		</article>
	);
};
