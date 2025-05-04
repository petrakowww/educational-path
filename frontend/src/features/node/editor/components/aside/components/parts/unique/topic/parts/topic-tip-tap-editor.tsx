import { Node } from 'reactflow';
import { TiptapEditor } from '@/shared/ui/tiptap/components/editor';

interface ITopicContent {
	node: Node;
}

export const TopicTiptapEditor = (props: ITopicContent) => {
	return (
		<TiptapEditor/>
	);
};
