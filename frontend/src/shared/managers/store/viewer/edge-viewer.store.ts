import { Edge } from 'reactflow';
import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

interface EdgeViewerState {
  edges: Edge[];
  setEdges: (edges: Edge[]) => void;
  clearEdges: () => void;
}

export const useEdgeViewerStore = createWithEqualityFn<EdgeViewerState>((set) => ({
  edges: [],
  setEdges: (edges) => set({ edges }),
  clearEdges: () => set({ edges: [] }),
}), shallow);
