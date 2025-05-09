import { Edge } from 'reactflow';
import { IEdgeData } from '@/shared/edge/types/edge-data';
import { MarkerType } from 'reactflow';
import { PrimaryColors } from '@/features/node/editor/types/colors';

export const defaultEdgeConfig: Partial<Edge<IEdgeData>> = {
	animated: true,
	type: 'custom',
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: PrimaryColors.Primary,
        width: 15,
        height: 15, 
    }, 
	data: {
		strokeStyle: 'dashed',
		pathType: 'smoothstep',
        color: null,
	},
};