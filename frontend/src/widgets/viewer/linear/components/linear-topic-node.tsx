'use client';

import { cn } from '@/shared/lib';
import { LinearNodeFactory } from './linear-factory';
import { LinearNodeProps } from '../types';
import { NodeDataShapeTopic } from '@/features/node/editor/types/node';
import { Button } from '@/shared/ui';
import { ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@/shared/ui';
import { useState } from 'react';
import { useViewerStore } from '@/shared/managers/store/viewer/view.store';
import { useNodeViewerStore } from '@/shared/managers/store/viewer/node-viewer.store';
import { useTopicCompletionStatus } from '@/features/view/hooks/use-topic-completion-status';
import { CheckCircle } from 'lucide-react';

export const LinearTopicNode = (props: LinearNodeProps<NodeDataShapeTopic>) => {
	const { isBlocked, node, visibleNodeIds } = props;
	const hasChildren = node.children?.length > 0;
	const [open, setOpen] = useState(false);

	const Wrapper = hasChildren ? Collapsible : 'div';
	const Trigger = hasChildren ? CollapsibleTrigger : 'div';
	const Content = hasChildren ? CollapsibleContent : 'div';

	const { isCompleted } = useTopicCompletionStatus(node.id);

	const toggleSidebar = useViewerStore((s) => s.toggleSidebar);
	const setSelectedNodeId = useNodeViewerStore((s) => s.setSelectedNodeId);

	const handleOpen = () => {
		setSelectedNodeId(node.id);
		toggleSidebar();
	};

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
						<h4 className="font-semibold">{node.data.title}</h4>
						{isCompleted && (
							<CheckCircle className="text-primary" />
						)}
					</div>
					<Button
						variant="outline"
						size="sm"
						className="text-xs"
						onClick={handleOpen}
					>
						Изучить <ArrowRight className="w-3 h-3 ml-1" />
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
