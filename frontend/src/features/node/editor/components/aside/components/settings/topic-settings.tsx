import { NodeDataShapeTopic } from '@/features/node/editor/types/node';
import { BaseSettings } from './base-settings';
import { Node } from 'reactflow';

interface ITopicNodeSettings {
    node: Node<NodeDataShapeTopic>;
}

export const TopicNodeSettings = ({ node }: ITopicNodeSettings) => {
    return <BaseSettings nodeHasLabel={true} node={node} />;
};
