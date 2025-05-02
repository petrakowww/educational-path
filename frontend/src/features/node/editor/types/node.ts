import { DeepPartial } from '@/shared/lib/types/deep-partial';
import {
	BorderRadiusEnum,
	JustificationEnum,
	TextAlignmentEnum,
	TextFontSizeEnum,
	TextFontWeightEnum,
} from '../types/styles';
import { Node } from 'reactflow';
import { Legends, Links, ToDo, ToDos } from './extended-node';

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

export interface NodeDataStyles {
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
}

export interface NodeDataShape extends NodeDataStyles {
	labelProps?: {
		label?: string | null;
	};
}

export interface NodeDataShapeExtended extends NodeDataShape {
	extendedSettings: boolean; // для отображения контента во вкладке Content
}

export interface NodeDataShapeLinks extends NodeDataShapeExtended {
	linkProps?: {
		links: Links;
	};
}

export interface NodeDataShapeButton extends NodeDataShapeExtended {
	buttonProps?: {
		url: string | null;
	};
}

export interface NodeDataShapeToDo extends NodeDataShapeExtended {
	todoProps: {
		todo: ToDo | null;
	};
}

export interface NodeDataShapeLegend extends NodeDataShapeExtended {
	legendProps?: {
		legends: Legends;
	};
}

export interface NodeDataShapeChecklist extends NodeDataShapeExtended {
    checklistProps: {
		todos: ToDos;
	};
}

export interface NodeDataShapeTopic extends NodeDataShapeExtended {
	topicProps?: {
		topicContent?: string | null;
	};
}

export type NodeDataShapeSubTopic = NodeDataShapeTopic;

export type NodeDataShapes = [
	NodeDataShape,
	NodeDataShapeChecklist,
	NodeDataShapeToDo,
	NodeDataShapeTopic,
	NodeDataShapeLinks,
	NodeDataShapeLegend,
	NodeDataShapeSubTopic,
	NodeDataShapeButton,
    NodeDataShapeChecklist,
];

export type NodeData = Node<DeepPartial<NodeDataShapes[number]>>;
