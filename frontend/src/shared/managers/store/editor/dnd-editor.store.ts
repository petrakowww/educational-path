import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';
import { NodeType } from '@/features/node/editor/types/node';

interface IDragAndDropStore {
  type: NodeType | null;
  setNodeType: (type: NodeType | null) => void;
  resetNodeType: () => void;
}

export const useDragAndDropStore = createWithEqualityFn<IDragAndDropStore>(
  (set) => ({
    type: null,
    setNodeType: (type) => set({ type }),
    resetNodeType: () => set({ type: null }),
  }),
  shallow
);
