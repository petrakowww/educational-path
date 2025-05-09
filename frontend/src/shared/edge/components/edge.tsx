import {
	EdgeLabelRenderer,
	getBezierPath,
	getSmoothStepPath,
	getStraightPath,
	EdgeProps,
} from 'reactflow';

import { EdgePosition, TPath, IEdgeData } from '../types/edge-data';
import { InfoIcon } from 'lucide-react';
import { useEdgeStore } from '@/shared/managers/store/edge.store';

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
	const {
		id,
		data = {
			strokeStyle: 'solid',
			pathType: 'bezier',
			color: null,
		},
		markerEnd,
		sourceX,
		sourceY,
		targetX,
		targetY,
	} = props;

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

	const { selectedEdge } = useEdgeStore(
		(state) => ({ selectedEdge: state.selectedEdge }),
		(a, b) => a?.selectedEdge?.id === b?.selectedEdge?.id
	);

	const isSelected = selectedEdge?.id === id;

	return (
		<>
			<path
				id={id}
				d={edgePath}
				markerEnd={markerEnd}
				style={{
					fill: 'none',
					stroke: color ?? '',
					strokeDasharray: strokeStyle === 'dashed' ? '5,5' : '0',
					strokeWidth: 2,
					pointerEvents: 'visibleStroke',
				}}
				className="stroke-primary"
			/>
			<EdgeLabelRenderer>
				<button
					className={`absolute border rounded bg-background aspect-square px-0.5 ${
						isSelected ? 'bg-primary' : ''
					}`}
					style={{
						...labelPosition,
						pointerEvents: 'all',
					}}
				>
					<InfoIcon size={15}/>
				</button>
			</EdgeLabelRenderer>
		</>
	);
};
