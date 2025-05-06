import { NodeProps } from 'reactflow';
import { useRef } from 'react';
import { ResizeNodeComponent } from '../../utils/resize-node';
import { DeleteNodeComponent } from '../../utils/delete-node';
import { Handle, Position } from 'reactflow';

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
