import { NodeProps } from 'reactflow';
import { useRef } from 'react';
import { Handle, Position } from 'reactflow';
import { ResizeNodeComponent } from '@/shared/node/utils/resize-node';
import { DeleteNodeComponent } from '@/shared/node/utils/delete-node';

interface EditableNodeProps {
	children: React.ReactNode;
	nodeProps: NodeProps;
	canResize?: boolean;
	canHandle?: boolean;
}

export const EditableNode = ({
	canHandle = true,
	canResize = true,
	children,
	nodeProps,
}: EditableNodeProps) => {
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<>
			{canHandle && (
				<Handle
					type="target"
					position={Position.Top}
					className="[&[data-id]]:bg-primary"
				/>
			)}
			<div ref={containerRef}>
				{children}
				{canResize && <ResizeNodeComponent ref={containerRef} />}
			</div>
			{canHandle && (
				<Handle
					type="source"
					position={Position.Bottom}
					className="[&[data-id]]:bg-primary"
				/>
			)}
			<DeleteNodeComponent node={nodeProps} />
		</>
	);
};
