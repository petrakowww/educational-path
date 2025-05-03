import { Edge } from 'reactflow';
import { shallow } from 'zustand/vanilla/shallow';
import { createWithEqualityFn } from 'zustand/traditional';
import { IEdgeData } from '@/shared/edge/types/edge-data';
import { merge } from 'lodash';

interface EdgeState {
	selectedEdgeId: string | null;
	selectedEdge: Edge<IEdgeData> | null;
	edges: Edge[];

	setEdges: (edges: Edge[]) => void;
	getEdges: () => Edge[];

	setSelectedEdge: (edge: Edge) => void;
	clearSelectedEdge: () => void;

	updateEdgeProperties: (payload: {
		edgeId: string;
		properties: Partial<Edge<IEdgeData>>;
	}) => void;
}

export const useEdgeStore = createWithEqualityFn<EdgeState>(
	(set, get) => ({
		selectedEdgeId: null,
		selectedEdge: null,
		edges: [],

		setEdges: (edges) => {
            const { selectedEdgeId } = get();
            const edgeStillExists = edges.some(edge => edge.id === selectedEdgeId);
        
            set({
                edges,
                selectedEdge: edgeStillExists
                    ? get().selectedEdge
                    : null,
                selectedEdgeId: edgeStillExists
                    ? selectedEdgeId
                    : null,
            });
        },
        
		getEdges: () => get().edges,

		setSelectedEdge: (edge: Edge) => {
			set({
				selectedEdgeId: edge.id,
				selectedEdge: edge,
			});
		},

		clearSelectedEdge: () =>
			set({
				selectedEdgeId: null,
				selectedEdge: null,
			}),

		updateEdgeProperties: ({
			edgeId,
			properties,
		}: {
			edgeId: string;
			properties: Partial<Edge<IEdgeData>>;
		}) => {
			const { edges, selectedEdge } = get();

			const updatedEdges = edges.map((edge) =>
				edge.id === edgeId
					? {
							...edge,
							...properties,
							data: merge(
								{},
								edge.data ?? {},
								properties.data ?? {}
							),
						}
					: edge
			);

			const updatedSelectedEdge =
				selectedEdge?.id === edgeId
					? {
							...selectedEdge,
							...properties,
							data: merge(
								{},
								selectedEdge.data ?? {},
								properties.data ?? {}
							),
						}
					: selectedEdge;

			set({
				edges: updatedEdges,
				selectedEdge: updatedSelectedEdge ?? null,
			});
		},
	}),
	shallow
);
