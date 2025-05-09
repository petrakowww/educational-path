import {
	EdgeProps,
} from 'reactflow';

import { IEdgeData } from '../types/edge-data';
import { getPathByType } from '../utils/path';


interface EdgeViewProps<T = unknown> extends EdgeProps {
	data?: IEdgeData<T>;
	markerEnd?: string;
}

export const CustomEdgeView = (props: EdgeViewProps) => {
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

	return (
		<path
			id={id}
			d={edgePath}
			markerEnd={markerEnd}
			style={{
				fill: 'none',
				stroke: color ?? 'hsl(var(--primary))',
				strokeDasharray: strokeStyle === 'dashed' ? '5,5' : '0',
				strokeWidth: 2,
				pointerEvents: 'none',
			}}
		/>
	);
};
