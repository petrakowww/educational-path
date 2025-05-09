import { NodeKind, CompletionType } from '@/shared/graphql/generated/output';
import { IsSelectedViewNode } from '@/shared/node/utils/is-selected-node';
import clsx, { ClassValue } from 'clsx';
import { CheckCircle2Icon, FileTextIcon, CircleIcon } from 'lucide-react';

import { ReactNode, CSSProperties } from 'react';
import { NodeProps } from 'reactflow';

interface SkeletonViewNodeProps<T = unknown> {
	children: ReactNode;
	nodeProps: NodeProps<T>;
	stylesForComponent?: ClassValue;
	style?: CSSProperties;
}

export const SkeletonViewNode = <T,>({
	children,
	nodeProps,
	stylesForComponent,
	style,
}: SkeletonViewNodeProps<T>) => {
	const isSelected = IsSelectedViewNode(nodeProps);

	// const renderKindIcon = () => {
	// 	switch (kind) {
	// 		case NodeKind.Markable:
	// 			return (
	// 				<CheckCircle2Icon className="w-4 h-4 text-emerald-500" />
	// 			);
	// 		case NodeKind.Topic:
	// 			return <FileTextIcon className="w-4 h-4 text-cyan-500" />;
	// 		default:
	// 			return <CircleIcon className="w-4 h-4 text-muted-foreground" />;
	// 	}
	// };

	// const renderCompletionIcon = () => {
	// 	switch (completionType) {
	// 		case CompletionType.Todo:
	// 			return <CheckCircle2Icon className="w-4 h-4 text-yellow-500" />;
	// 		case CompletionType.Manual:
	// 			return <CheckCircle2Icon className="w-4 h-4 text-blue-500" />;
	// 		default:
	// 			return <CircleIcon className="w-4 h-4 text-muted-foreground" />;
	// 	}
	// };

	return (
		<article
			className={clsx(
				'relative group h-full w-full bg-background flex items-center justify-center border-[2px] rounded-md',
				isSelected &&
					'outline outline-offset-2 outline-solid outline-[3px] outline-primary',
				stylesForComponent
			)}
			style={style}
		>
			<div className="absolute left-1 top-1 flex flex-col gap-1">
				{/* {renderKindIcon()}
				{renderCompletionIcon()} */}
			</div>
			{children}
		</article>
	);
};
