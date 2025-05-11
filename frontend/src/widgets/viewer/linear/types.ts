import { NodeMain } from "@/features/node/editor/types/node";

export interface TopicTreeNode<T = NodeMain> {
  id: string;
  type: string;
  data: T;
  children: TopicTreeNode<T>[];
}


export interface LinearNodeProps<T> {
    node: TopicTreeNode<T>;
	isBlocked: boolean;
    visibleNodeIds: Set<string>;
}