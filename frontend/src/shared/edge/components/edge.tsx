import {
	EdgeLabelRenderer,
	getBezierPath,
	getSmoothStepPath,
	getStraightPath,
	EdgeProps,
} from 'reactflow';

import { EdgePosition, TPath, IEdgeData } from '../types/edge-data';
import { InfoIcon } from 'lucide-react';

const pathStrategies: Record<
	TPath,
	(params: {
		sourceX: number;
		sourceY: number;
		targetX: number;
		targetY: number;
	}) => [string, number, number, number, number]
> = {
	bezier: getBezierPath,
	smoothstep: getSmoothStepPath,
	straight: getStraightPath,
};

const getPathByType = (pathType: TPath, position: EdgePosition) => {
	const { sourceX, sourceY, targetX, targetY } = position;
	const strategy = pathStrategies[pathType] || getBezierPath;
	return strategy({ sourceX, sourceY, targetX, targetY });
};

interface CustomEdgeProps<T = unknown> extends EdgeProps {
	id: string;
	data?: IEdgeData<T>;
	markerEnd?: string;
}

export const CustomEdge = (props: CustomEdgeProps) => {
	const { data = {
		strokeStyle: 'solid',
		pathType: 'bezier',
		color: null,
	}, markerEnd, sourceX, sourceY, targetX, targetY } = props;

	const { strokeStyle = 'solid', color, pathType = 'bezier' } = data;

	const [edgePath] = getPathByType(pathType ?? 'bezier', {
		sourceX,
		sourceY,
		targetX,
		targetY,
	});

	const labelPosition = {
		transform: `translate(-50%, -50%) translate(${(sourceX + targetX) / 2}px, ${(sourceY + targetY) / 2}px)`,
	};

	return (
		<>
			<path
				d={edgePath}
				markerEnd={markerEnd}
				style={{
					fill: 'none',
					stroke: color ?? '',
					strokeDasharray: strokeStyle === 'dashed' ? '5,5' : '0',
					strokeWidth: 2,
					pointerEvents: 'all',
				}}
				className='stroke-primary'
			/>
			<EdgeLabelRenderer>
				<button
					className="absolute border rounded bg-background aspect-square px-0.5"
					style={{
						...labelPosition,
						pointerEvents: 'all',
					}}
				>
					<InfoIcon size={15} />
				</button>
			</EdgeLabelRenderer>
		</>
	);
};
