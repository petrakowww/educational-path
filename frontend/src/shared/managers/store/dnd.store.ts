import { create } from 'zustand';
import { NodeType } from '@/features/node/editor/types/node';

interface IDragAndDropStore {
  type: NodeType | null;
  setNodeType: (type: NodeType | null) => void;
  resetNodeType: () => void;
}

export const useDragAndDropStore = create<IDragAndDropStore>((set) => ({
  type: null,
  setNodeType: (type) => set({ type }),
  resetNodeType: () => set({ type: null }),
}));
