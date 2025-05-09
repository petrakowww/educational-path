import { DeepRequired } from '@/shared/lib/types/deep-required';
import {
	BorderRadiusEnum,
	JustificationEnum,
	TextAlignmentEnum,
	TextFontSizeEnum,
	TextFontWeightEnum,
} from '../types/styles';
import {
	NodeMain,
	NodeDataShapeLegend,
	NodeDataShapeToDo,
	NodeDataShapeChecklist,
	NodeDataShapeTopic,
	NodeDataShapeLinks,
	NodeDataShapeButton,
} from '../types/node';
import { BackgroundColorsEnum } from '../types/colors';

export type NodeBuilderConfig = DeepRequired<Required<NodeMain>>;

export const nodeBuilderConfig: NodeBuilderConfig = {
	title: '',
	todo: [],
	canShowLabel: true,
	meta: {
		blockProps: {
			backgroundColor: null,
			borderColor: null,
			borderRadius: BorderRadiusEnum.MD,
			borderWidth: null,
			padding: null,
		},
		fontProps: {
			fontSize: TextFontSizeEnum.XL,
			fontWeight: TextFontWeightEnum.Regular,
			fontColor: null,
			textAlign: TextAlignmentEnum.Center,
			justification: JustificationEnum.Middle,
		},
	},
};

export type NodeBuilderConfigLinks = DeepRequired<Required<NodeDataShapeLinks>>;

export const nodeBuilderConfigLinks: NodeBuilderConfigLinks = {
	...nodeBuilderConfig,
	extendedSettings: true,
	linkProps: {
		links: [],
	},
};

export type NodeBuilderConfigChecklist = DeepRequired<
	Required<NodeDataShapeChecklist>
>;

export const nodeBuilderConfigChecklist: NodeBuilderConfigChecklist = {
	...nodeBuilderConfig,
	extendedSettings: true,
	todos: [],
};

export type NodeBuilderConfigTodo = DeepRequired<Required<NodeDataShapeToDo>>;

export const nodeBuilderConfigToDo: NodeBuilderConfigTodo = {
	...nodeBuilderConfig,
	extendedSettings: true,
	todos: [],
	topicProps: {
		topicContent: null,
	},
	linkProps: {
		links: [],
	},
};

export type NodeBuilderConfigLegend = DeepRequired<
	Required<NodeDataShapeLegend>
>;

export const nodeBuilderConfigLegend: NodeBuilderConfigLegend = {
	...nodeBuilderConfig,
	extendedSettings: true,
	legendProps: {
		legends: [],
	},
};

export type NodeBuilderConfigTopic = DeepRequired<Required<NodeDataShapeTopic>>;

export const nodeBuilderConfigTopic: NodeBuilderConfigTopic = {
	...nodeBuilderConfig,
	extendedSettings: true,
	topicProps: {
		topicContent: null,
	},
	meta: {
		...nodeBuilderConfig.meta,
		blockProps: {
			...nodeBuilderConfig.meta.blockProps,
			backgroundColor: BackgroundColorsEnum.Primary,
		},
	},
	linkProps: {
		links: [],
	},
};

export type NodeBuilderConfigSubTopic = NodeBuilderConfigTopic;

export const nodeBuilderConfigSubTopic: NodeBuilderConfigSubTopic = {
	...nodeBuilderConfigTopic,
	meta: {
		...nodeBuilderConfig.meta,
		blockProps: {
			...nodeBuilderConfig.meta.blockProps,
			backgroundColor: BackgroundColorsEnum.Highlight,
		},
	},
};

export type NodeBuilderConfigButton = DeepRequired<
	Required<NodeDataShapeButton>
>;

export const nodeBuilderConfigButton: NodeBuilderConfigButton = {
	...nodeBuilderConfig,
	extendedSettings: true,
	buttonProps: {
		url: null,
	},
};
