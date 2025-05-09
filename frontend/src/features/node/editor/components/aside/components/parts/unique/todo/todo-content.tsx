
import { NodeDataShapeToDo } from '@/features/node/editor/types/node';
import { LinksSettings } from '../links';
import { TopicTiptapEditor } from '../topic/parts/topic-tip-tap-editor';
import { ComponentToDo } from './todo';
import { Node } from 'reactflow';

interface ITodoAdvancedSettings {
    node: Node<NodeDataShapeToDo>;
}

export const TodoAdvanced = (props: ITodoAdvancedSettings) => {
    const { node } = props;

    return (
        <>
            <ComponentToDo node={node} />
            <TopicTiptapEditor node={node} />
            <LinksSettings />
        </>
    );
};
