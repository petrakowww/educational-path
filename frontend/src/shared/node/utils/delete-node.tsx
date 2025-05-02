import { Button } from '@/shared/ui';
import { Trash2Icon } from 'lucide-react';
import { NodeProps } from 'reactflow';
import React from 'react';
import { NodeDeleterFactory } from '@/features/node/editor/utils/delete/node-deleter-factory';

interface DeleteNodeComponentProps {
	node: NodeProps;
	callbackDeleteNode?: () => void;
}

export const DeleteNodeComponent = (props: DeleteNodeComponentProps) => {
	const { node, callbackDeleteNode } = props;

	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		callbackDeleteNode?.();
		const deleter = NodeDeleterFactory.createDeleter(node);
		deleter.delete();
	};
	return (
		<div className="absolute top-0 right-0 ">
			<div className="hidden group-hover:block absolute right-0 translate-x-1/2 -translate-y-1/3">
				<Button
					className="p-0 w-6 h-6 hover:bg-opacity-100 hover:bg-secondary hover:text-destructive"
					variant={'destructive'}
					onClick={handleClick}
				>
					<Trash2Icon />
				</Button>
			</div>
		</div>
	);
};
