import { NodeDataShapeButton } from '@/features/node/editor/types/node';
import { BaseSettings } from './base-settings';
import { Node } from 'reactflow';

interface IToDoNodeSettings {
    node: Node<NodeDataShapeButton>;
}

export const ToDoNodeSettings = ({ node }: IToDoNodeSettings) => {
    return <BaseSettings nodeHasLabel={true} node={node} />;
};
