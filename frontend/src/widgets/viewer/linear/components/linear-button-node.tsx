'use client';

import { useState } from 'react';
import { LinearNodeProps } from '../types';
import { NodeDataShapeButton } from '@/features/node/editor/types/node';
import { cn } from '@/shared/lib';
import { Button } from '@/shared/ui';
import { ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';
import {
	Collapsible,
	CollapsibleTrigger,
	CollapsibleContent,
} from '@/shared/ui';
import { LinearNodeFactory } from './linear-factory';

export const LinearButtonNode = (
	props: LinearNodeProps<NodeDataShapeButton>
) => {
	const { node, isBlocked, visibleNodeIds } = props;
	const label = node.data.title ?? '';
	const link = node.data.buttonProps?.url ?? '#';
	const hasChildren = node.children?.length > 0;
	const [open, setOpen] = useState(false);

	const Wrapper = hasChildren ? Collapsible : 'div';
	const Trigger = hasChildren ? CollapsibleTrigger : 'div';
	const Content = hasChildren ? CollapsibleContent : 'div';

	return (
		<Wrapper {...(hasChildren ? { open, onOpenChange: setOpen } : {})}>
			<div
				className={cn(
					'border rounded p-4',
					isBlocked && 'opacity-50 pointer-events-none'
				)}
			>
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-2">
						{hasChildren ? (
							<Trigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="h-6 w-6 p-0"
								>
									{open ? (
										<ChevronDown className="h-4 w-4" />
									) : (
										<ChevronRight className="h-4 w-4" />
									)}
								</Button>
							</Trigger>
						) : null}
						<h5 className="font-medium">{label}</h5>
					</div>
					<Button
						variant="outline"
						size="sm"
						asChild
						className="text-xs"
					>
						<a
							href={link}
							target="_blank"
							rel="noopener noreferrer"
						>
							Перейти <ArrowRight className="w-3 h-3 ml-1" />
						</a>
					</Button>
				</div>

				<Content>
					{hasChildren && (
						<div className="ml-4 mt-3 border-l pl-4 space-y-2">
							{node.children.map((child) => (
								<LinearNodeFactory
									key={child.id}
									node={child}
									visibleNodeIds={visibleNodeIds}
								/>
							))}
						</div>
					)}
				</Content>
			</div>
		</Wrapper>
	);
};
