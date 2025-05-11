import { NodeProps, Handle, Position } from 'reactflow';
import { ReactNode } from 'react';

interface EdgeConnectableViewNodesProps {
	children: ReactNode;
	nodeProps: NodeProps;
	canHandle?: boolean;
}

export const EdgeConnectableViewNodes = ({
	children,
	canHandle = true,
}: EdgeConnectableViewNodesProps) => {
	return (
		<>
			{canHandle && (
				<Handle
					type="target"
					position={Position.Top}
					className="[&[data-id]]:bg-primary pointer-events-none"
					isConnectable={false}
				/>
			)}
			{children}
			{canHandle && (
				<Handle
					type="source"
					position={Position.Bottom}
					className="[&[data-id]]:bg-primary pointer-events-none"
					isConnectable={false}
				/>
			)}
		</>
	);
};
