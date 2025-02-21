import { MoveDownRightIcon } from 'lucide-react';
import {
	NodeResizeControl,
	ResizeDragEvent,
	ResizeParamsWithDirection,
} from 'reactflow';

interface ResizeNodeComponentProps {
	ref?: React.RefObject<HTMLDivElement | null>;
	minHeight?: number;
	minWidth?: number;
	onlyXaxis?: boolean;
	onlyYaxis?: boolean;
	ignoreFitContent?: boolean;
}

export const ResizeNodeComponent = (props: ResizeNodeComponentProps) => {
	const { ref, minHeight, minWidth, onlyXaxis, onlyYaxis, ignoreFitContent } =
		props;

	const handleShouldResize = (
		event: ResizeDragEvent,
		params: ResizeParamsWithDirection
	) => {
		if (!ref || !ref.current || ignoreFitContent) return true;

		const intrinsicWidth = ref.current.scrollWidth;
		const intrinsicHeight = ref.current.scrollHeight;

		const canResizeWidth = params.width >= intrinsicWidth;
		const canResizeHeight = params.height >= intrinsicHeight;
		if (onlyXaxis) return canResizeWidth;
		if (onlyYaxis) return canResizeHeight;

		return canResizeWidth && canResizeHeight;
	};

	return (
		<div className="absolute bottom-0 right-0 -translate-x-4 -translate-y-4">
			<NodeResizeControl
				position="bottom-right"
				className="!opacity-0 !bg-transparent group-hover:!opacity-100 !border-none"
				shouldResize={handleShouldResize}
				minHeight={minHeight}
				minWidth={minWidth}
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
