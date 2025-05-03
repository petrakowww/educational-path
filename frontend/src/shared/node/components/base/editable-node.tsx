import { NodeProps } from 'reactflow';
import { useRef } from 'react';
import { ResizeNodeComponent } from '../../utils/resize-node';
import { DeleteNodeComponent } from '../../utils/delete-node';
import { Handle, Position } from 'reactflow';

interface EditableNodeProps {
	children: React.ReactNode;
	nodeProps: NodeProps;
}

export const EditableNode = ({ children, nodeProps }: EditableNodeProps) => {
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<>
			<Handle type="target" position={Position.Top} className='[&[data-id]]:bg-primary'/>
			<div ref={containerRef}>
				{children}
				<ResizeNodeComponent ref={containerRef} />
			</div>
			<Handle type="source" position={Position.Bottom} className='[&[data-id]]:bg-primary' />
			<DeleteNodeComponent node={nodeProps} />
		</>
	);
};
