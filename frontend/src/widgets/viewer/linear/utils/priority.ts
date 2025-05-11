import { NodeType } from '@/features/node/editor/types/node';

export const NODE_TYPE_PRIORITY: Record<NodeType, number> = {
  [NodeType.topic]: 1,
  [NodeType.subtopic]: 1,
  [NodeType.todo]: 2,
  [NodeType.checklist]: 3,
  [NodeType.button]: 4,
  [NodeType.label]: 4,
  [NodeType.paragraph]: 4,
  [NodeType.title]: 4,
};
