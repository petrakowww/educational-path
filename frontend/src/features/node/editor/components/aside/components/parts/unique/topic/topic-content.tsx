import { ComponentChangeTopicType } from './parts/change-type';
import { Node } from 'reactflow';
import { TopicTiptapEditor } from './parts/topic-tip-tap-editor';
import { LinksSettings } from '../links';

interface ITopicAdvancedSettings {
	node: Node;
}

export const TopicAdvanced = (props: ITopicAdvancedSettings) => {
	const { node } = props;

	return (
		<>
			<ComponentChangeTopicType node={node} />
			<TopicTiptapEditor node={node} />
			<LinksSettings />
		</>
	);
};
