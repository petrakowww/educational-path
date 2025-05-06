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
	labelProps: {
		label: null,
	},
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
};

export type NodeBuilderConfigLinks = DeepRequired<Required<NodeDataShapeLinks>>;

export const nodeBuilderConfigLinks: NodeBuilderConfigLinks = {
	...nodeBuilderConfig,
	extendedSettings: true,
	linkProps: {
		links: [],
	},
};

export type NodeBuilderConfigToDo = DeepRequired<Required<NodeDataShapeToDo>>;

export const nodeBuilderConfigToDo: NodeBuilderConfigToDo = {
	...nodeBuilderConfig,
	extendedSettings: true,
	todoProps: {
		todo: null,
	},
};

export type NodeBuilderConfigChecklist = DeepRequired<
	Required<NodeDataShapeChecklist>
>;

export const nodeBuilderConfigChecklist: NodeBuilderConfigChecklist = {
	...nodeBuilderConfig,
	extendedSettings: true,
	checklistProps: {
		todos: [],
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
	blockProps: {
		...nodeBuilderConfig.blockProps,
		backgroundColor: BackgroundColorsEnum.Primary,
	},
	linkProps: {
		links: [],
	}
};

export type NodeBuilderConfigSubTopic = NodeBuilderConfigTopic;

export const nodeBuilderConfigSubTopic: NodeBuilderConfigSubTopic = {
	...nodeBuilderConfigTopic,
	blockProps: {
		...nodeBuilderConfig.blockProps,
		backgroundColor: BackgroundColorsEnum.Highlight,
	}
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
