import { ComponentChangeTopicType } from './parts/change-type';
import { Node } from 'reactflow';
import { TopicTiptapEditor } from './parts/topic-tip-tap-editor';
import { LinksSettings } from '../links';
import { VideoCourseDrawer } from '../courses/video-course-drawer';

interface ITopicAdvancedSettings {
	node: Node;
}

export const TopicAdvanced = (props: ITopicAdvancedSettings) => {
	const { node } = props;

	return (
		<>
			<ComponentChangeTopicType node={node} />
			<VideoCourseDrawer node={node}/>
			<TopicTiptapEditor node={node} />
			<LinksSettings />
		</>
	);
};
