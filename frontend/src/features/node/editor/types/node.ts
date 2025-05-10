import { DeepPartial } from '@/shared/lib/types/deep-partial';
import {
	BorderRadiusEnum,
	JustificationEnum,
	TextAlignmentEnum,
	TextFontSizeEnum,
	TextFontWeightEnum,
} from '../types/styles';
import { Node } from 'reactflow';
import { Legends, Links } from './extended-node';
import {
	ChecklistItem,
} from '@/shared/graphql/generated/output';

export enum NodeType {
	title = 'TITLE',
	topic = 'TOPIC',
	subtopic = 'SUBTOPIC',
	paragraph = 'PARAGRAPH',
	label = 'LABEL',
	button = 'BUTTON',
	todo = 'TODO',
	checklist = 'CHECKLIST',
}

export enum NodeLabel {
	title = 'Заглавие',
	topic = 'Тема',
	subtopic = 'Подтема',
	paragraph = 'Параграф',
	label = 'Ярлык',
	button = 'Кнопка',
	legend = 'Группа',
	todo = 'Задача',
	checklist = 'Контрольный список',
}

export interface NodeMain {
	title: string;
	todo?: ChecklistItem[];
	canShowLabel: boolean | null;
	meta: {
		blockProps?: {
			backgroundColor?: React.CSSProperties['backgroundColor'] | null;
			padding?: number | null;
			borderColor?: React.CSSProperties['borderColor'] | null;
			borderRadius?: BorderRadiusEnum | number;
			borderWidth?: number | null;
		};
		fontProps?: {
			fontSize?: TextFontSizeEnum | number;
			fontWeight?: TextFontWeightEnum | number;
			fontColor?: React.CSSProperties['color'] | null;
			textAlign?: TextAlignmentEnum;
			justification?: JustificationEnum;
		};
	};
}

export interface NodeDataShapeExtended extends NodeMain {
	extendedSettings: boolean;
}

export interface NodeDataShapeLinks extends NodeDataShapeExtended {
	linkProps: {
		links: Links;
	};
}

export interface NodeDataShapeButton extends NodeDataShapeExtended {
	buttonProps: {
		url: string | null;
	};
}

export interface NodeDataShapeLegend extends NodeDataShapeExtended {
	legendProps?: {
		legends: Legends;
	};
}

export interface NodeDataShapeTopic extends NodeDataShapeLinks {
	topicProps: {
		topicContent: string | null;
	};
}

export interface NodeDataShapeChecklist extends NodeDataShapeExtended {
	todos: ChecklistItem[];
}

export interface NodeDataShapeToDo
	extends NodeDataShapeChecklist,
		NodeDataShapeTopic {}

export type NodeDataShapeSubTopic = NodeDataShapeTopic;

export type NodeDataShapes = [
	NodeMain,
	NodeDataShapeChecklist,
	NodeDataShapeToDo,
	NodeDataShapeTopic,
	NodeDataShapeLinks,
	NodeDataShapeLegend,
	NodeDataShapeSubTopic,
	NodeDataShapeButton,
];

export type NodeData = Node<DeepPartial<NodeDataShapes[number]>>;
