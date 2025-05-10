import { NodeStatus, TopicNode } from "@/shared/graphql/generated/output";

export type ProgressLite = {
    topicNodeId: string;
    status: NodeStatus;
};

export type TopicNodeLite = Omit<TopicNode, 'UserTopicProgress'>;