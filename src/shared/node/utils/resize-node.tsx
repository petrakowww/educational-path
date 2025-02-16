import { MoveDownRightIcon } from 'lucide-react';
import { NodeResizeControl } from 'reactflow';

interface ResizeNodeComponentProps {
	minWidth?: number;
	minHeight?: number;
}

export const ResizeNodeComponent = (props: ResizeNodeComponentProps) => {
	const { minHeight, minWidth } = props;
	return (
		<div className="absolute w-full h-full  group flex-shrink-0">
			<div className="hidden group-hover:block ">
				<NodeResizeControl
					position="bottom-right"
					minWidth={minWidth}
					minHeight={minHeight}
					className="!opacity-0 !bg-transparent group-hover:!opacity-100 group-hover:!bg-transparent !border-none"
				>
					<MoveDownRightIcon
						className="absolute right-1 bottom-1 text-primary font-bold"
						width={15}
						height={15}
					/>
				</NodeResizeControl>
			</div>
		</div>
	);
};
