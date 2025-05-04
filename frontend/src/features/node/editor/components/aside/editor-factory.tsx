import { Node } from 'reactflow';
import {
	NodeDataShapeExtended,
	NodeType,
} from '@/features/node/editor/types/node';
import { BaseSettings } from './components/settings/base-settings';
import { ButtonNodeSettings } from './components/settings/button-settings';
import { ChecklistNodeSettings } from './components/settings/checklist-settings';
import { LabelNodeSettings } from './components/settings/label-settings';
import { ParagraphNodeSettings } from './components/settings/paragraph-settings';
import { TitleNodeSettings } from './components/settings/title-settings';
import { ToDoNodeSettings } from './components/settings/todo-settings';
import { TopicNodeSettings } from './components/settings/topic-settings';
import { BaseAdvancedSettings } from './components/settings/advanced-settings';
import { ComponentChangeTopicType } from './components/parts/unique/topic/parts/change-type';
import { TopicAdvanced } from './components/parts/unique/topic/topic-content';

type SettingsComponent = React.FC<{ node: Node }>;

interface NodeSettingsFactoryEntry {
	General: SettingsComponent;
	Content: SettingsComponent | null;
	Advanced: SettingsComponent;
}

type NodeSettingsMap = {
	[key in NodeType]: NodeSettingsFactoryEntry;
};

export const nodeSettingsMap: NodeSettingsMap = {
	CHECKLIST: {
		General: ChecklistNodeSettings,
		Content: null,
		Advanced: BaseAdvancedSettings,
	},
	TODO: {
		General: ToDoNodeSettings,
		Content: null,
		Advanced: BaseAdvancedSettings,
	},
	LABEL: {
		General: LabelNodeSettings,
		Content: null,
		Advanced: BaseAdvancedSettings,
	},
	PARAGRAPH: {
		General: ParagraphNodeSettings,
		Content: null,
		Advanced: BaseAdvancedSettings,
	},
	TITLE: {
		General: TitleNodeSettings,
		Content: null,
		Advanced: BaseAdvancedSettings,
	},
	TOPIC: {
		General: TopicNodeSettings,
		Content: TopicAdvanced,
		Advanced: BaseAdvancedSettings,
	},
	SUBTOPIC: {
		General: TopicNodeSettings,
		Content: ComponentChangeTopicType,
		Advanced: BaseAdvancedSettings,
	},
	BUTTON: {
		General: ButtonNodeSettings,
		Content: null,
		Advanced: BaseAdvancedSettings,
	},
};

export const nodeSettingsFactory = (
	node: Node
): {
	General: SettingsComponent;
	Content: SettingsComponent | null;
	Advanced: SettingsComponent;
	hasContent: boolean;
} => {
	if (!node?.type || !(node.type in nodeSettingsMap)) {
		return {
			General: BaseSettings,
			Advanced: BaseAdvancedSettings,
			Content: null,
			hasContent: false,
		};
	}

	const entry = nodeSettingsMap[node.type as NodeType];

	const hasExtended =
		'extendedSettings' in (node.data || {}) &&
		(node.data as NodeDataShapeExtended)?.extendedSettings != null;

	return {
		General: entry.General,
		Content: entry.Content,
		Advanced: entry.Advanced,
		hasContent: hasExtended && !!entry.Content,
	};
};
