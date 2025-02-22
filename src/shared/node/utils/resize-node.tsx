import { MoveDownRightIcon } from 'lucide-react';
import { useRef } from 'react';
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

	const previousSizeRef = useRef<{ width: number; height: number } | null>(
		null
	);

	const handleShouldResize = (
		event: ResizeDragEvent,
		params: ResizeParamsWithDirection
	) => {
		if (!ref || !ref.current || ignoreFitContent) return true;

		const intrinsicWidth = ref.current.scrollWidth;
		const intrinsicHeight = ref.current.scrollHeight;

		const previousSize = previousSizeRef.current;

		if (!previousSize) {
			previousSizeRef.current = {
				width: params.width,
				height: params.height,
			};
			return true;
		}

		const isIncreasingWidth = params.width >= previousSize.width;
		const isIncreasingHeight = params.height >= previousSize.height;

		if (isIncreasingWidth && isIncreasingHeight) {
			previousSizeRef.current = {
				width: params.width,
				height: params.height,
			};
			return true;
		}

		const canResizeWidth =
			isIncreasingWidth || params.width >= intrinsicWidth;
		const canResizeHeight =
			isIncreasingHeight || params.height >= intrinsicHeight;

		if (canResizeWidth && canResizeHeight) {
			previousSizeRef.current = {
				width: params.width,
				height: params.height,
			};
		}

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
					className="text-black font-bold"
					width={15}
					height={15}
				/>
			</NodeResizeControl>
		</div>
	);
};
