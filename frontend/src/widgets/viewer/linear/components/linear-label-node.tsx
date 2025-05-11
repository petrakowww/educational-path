'use client';

import { LinearNodeProps } from '../types';
import { NodeDataShapeLinks } from '@/features/node/editor/types/node';
import { cn } from '@/shared/lib';

export const LinearLabelNode = (props: LinearNodeProps<NodeDataShapeLinks>) => {
	const { node, isBlocked } = props;

	return (
		<div
			className={cn(
				'border rounded p-3 bg-muted/30',
				isBlocked && 'opacity-50 pointer-events-none'
			)}
		>
			<p className="text-sm text-muted-foreground">
				{node.data.title ?? 'Метка'}
			</p>
		</div>
	);
};
