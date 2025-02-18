import { MoveDownRightIcon } from 'lucide-react';
import { NodeResizeControl } from 'reactflow';

interface ResizeNodeComponentProps {
	minWidth?: number;
	minHeight?: number;
}

export const ResizeNodeComponent = (props: ResizeNodeComponentProps) => {
	const { minHeight, minWidth } = props;
	return (
		<div className="absolute bottom-0 right-0 -translate-x-4 -translate-y-4">
			<NodeResizeControl
				position="bottom-right"
				minWidth={minWidth}
				minHeight={minHeight}
				className="!opacity-0 !bg-transparent group-hover:!opacity-100 !border-none"
			>
				<MoveDownRightIcon
					className="text-primary font-bold"
					width={15}
					height={15}
				/>
			</NodeResizeControl>
		</div>
	);
};
