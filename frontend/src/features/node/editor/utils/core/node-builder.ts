import { Node } from 'reactflow';
import {
	NodeBuilderConfig,
	NodeBuilderConfigChecklist,
	NodeBuilderConfigToDo,
	NodeBuilderConfigTopic,
	NodeBuilderConfigLinks,
	NodeBuilderConfigButton,
} from '../../config/node-builder-config';
import { DeepPartial } from '@/shared/lib/types/deep-partial';
import {
	BorderRadiusEnum,
	JustificationEnum,
	TextAlignmentEnum,
	TextFontWeightEnum,
} from '../../types/styles';
import {
	NodeDataShapeChecklist,
	NodeDataShapeExtended,
	NodeDataShapeToDo,
	NodeDataShapeLinks,
	NodeDataShape,
	NodeLabel,
	NodeType,
	NodeDataShapeTopic,
	NodeDataShapeButton,
} from '../../types/node';

export class NodeBuilder<
	TData extends NodeDataShape = NodeDataShape,
	TConfig extends NodeBuilderConfig = NodeBuilderConfig,
> {
	protected data: DeepPartial<TData> = {};
	protected config: TConfig;
	protected id: string;
	protected position = { x: 0, y: 0 };
	protected type: NodeType;

	constructor(config: TConfig, type: NodeType) {
		this.config = config;
		this.id = crypto.randomUUID();
		this.type = type;
	}

	withBackgroundColor(): NodeBuilder<
		TData & {
			blockProps: { backgroundColor: React.CSSProperties['color'] };
		}
	> {
		this.data = {
			...this.data,
			blockProps: {
				...(this.data.blockProps ?? {}),
				backgroundColor: this.config.blockProps.backgroundColor,
			},
		};

		return this as never;
	}

	withBorderColor(): NodeBuilder<
		TData & { blockProps: { borderColor: React.CSSProperties['color'] } }
	> {
		this.data = {
			...this.data,
			blockProps: {
				...(this.data.blockProps ?? {}),
				borderColor: this.config.blockProps.borderColor,
			},
		};

		return this as never;
	}

	withPadding(): NodeBuilder<TData & { blockProps: { padding: number } }> {
		this.data = {
			...this.data,
			blockProps: {
				...(this.data.blockProps ?? {}),
				padding: this.config.blockProps.padding,
			},
		};

		return this as never;
	}

	withFontSize(): NodeBuilder<TData & { fontProps: { fontSize: number } }> {
		this.data = {
			...this.data,
			fontProps: {
				...(this.data.fontProps ?? {}),
				fontSize: this.config.fontProps.fontSize,
			},
		};

		return this as never;
	}

	withFontColor(): NodeBuilder<
		TData & { fontProps: { fontColor: React.CSSProperties['color'] } }
	> {
		this.data = {
			...this.data,
			fontProps: {
				...(this.data.fontProps ?? {}),
				fontColor: this.config.fontProps.fontColor,
			},
		};

		return this as never;
	}

	withBorderWidth(): NodeBuilder<
		TData & { blockProps: { borderWidth: number | null } }
	> {
		this.data = {
			...this.data,
			blockProps: {
				...(this.data.blockProps ?? {}),
				borderWidth: this.config.blockProps.borderWidth,
			},
		};

		return this as never;
	}

	withBorderRadius(): NodeBuilder<
		TData & { blockProps: { borderRadius: BorderRadiusEnum | number } }
	> {
		this.data = {
			...this.data,
			blockProps: {
				...(this.data.blockProps ?? {}),
				borderRadius: this.config.blockProps.borderRadius,
			},
		};

		return this as never;
	}

	withFontWeight(): NodeBuilder<
		TData & { fontProps: { fontWeight: TextFontWeightEnum | number } }
	> {
		this.data = {
			...this.data,
			fontProps: {
				...(this.data.fontProps ?? {}),
				fontWeight: this.config.fontProps.fontWeight,
			},
		};

		return this as never;
	}

	withTextAlign(): NodeBuilder<
		TData & { fontProps: { textAlign: TextAlignmentEnum } }
	> {
		this.data = {
			...this.data,
			fontProps: {
				...(this.data.fontProps ?? {}),
				textAlign: this.config.fontProps.textAlign,
			},
		};

		return this as never;
	}

	withJustification(): NodeBuilder<
		TData & { fontProps: { justification: JustificationEnum } }
	> {
		this.data = {
			...this.data,
			fontProps: {
				...(this.data.fontProps ?? {}),
				justification: this.config.fontProps.justification,
			},
		};

		return this as never;
	}

	withLabel(
		label: NodeLabel
	): NodeBuilder<TData & { labelProps: { label: string } }> {
		this.data = {
			...this.data,
			labelProps: {
				...(this.data.labelProps ?? {}),
				label,
			},
		};
		return this as never;
	}

	withType(type: NodeType) {
		this.type = type;
		return this;
	}

	withPosition(x: number, y: number) {
		this.position = { x, y };
		return this;
	}

	getData(): DeepPartial<TData> {
		return this.data;
	}

	build(): Node<TData> {
		return {
			id: this.id,
			data: this.data as TData,
			position: this.position,
			type: this.type,
		};
	}
}

export class NodeBuilderWithContent<
	TData extends NodeDataShapeExtended,
	TConfig extends NodeBuilderConfig = NodeBuilderConfig,
> extends NodeBuilder<TData, TConfig> {
	constructor(config: TConfig, type: NodeType) {
		super(config, type);
		this.data = {
			...(this.data ?? {}),
			extendedSettings: true,
		};
	}

	withExtendedSettingsOn() {
		this.data = {
			...this.data,
			extendedSettings: true,
		};
		return this;
	}

	withExtendedSettingsOff() {
		this.data = {
			...this.data,
			extendedSettings: false,
		};
		return this;
	}
}

export class NodeBuilderLinks extends NodeBuilderWithContent<
	NodeDataShapeLinks,
	NodeBuilderConfigLinks
> {
	constructor(config: NodeBuilderConfigLinks) {
		super(config, NodeType.button);
		this.data = {
			...this.data,
			linkProps: config.linkProps,
		};
	}
}

// export class NodeBuilderLegend extends NodeBuilderWithContent<
// 	NodeDataShapeLegend,
// 	NodeBuilderConfigLegend
// > {
// 	constructor(config: NodeBuilderConfigLegend) {
// 		super(config, NodeType.legend);
// 		this.data = {
// 			...this.data,
// 			legendProps: config.legendProps,
// 		};
// 	}
// }

export class NodeBuilderTodo extends NodeBuilderWithContent<
	NodeDataShapeToDo,
	NodeBuilderConfigToDo
> {
	constructor(config: NodeBuilderConfigToDo) {
		super(config, NodeType.todo);
		this.data = {
			...this.data,
			todoProps: config.todoProps,
		};
	}
}

export class NodeBuilderChecklist extends NodeBuilderWithContent<
	NodeDataShapeChecklist,
	NodeBuilderConfigChecklist
> {
	constructor(config: NodeBuilderConfigChecklist) {
		super(config, NodeType.checklist);
		this.data = {
			...this.data,
			checklistProps: config.checklistProps,
		};
	}
}

export class NodeBuilderTopic extends NodeBuilderWithContent<
	NodeDataShapeTopic,
	NodeBuilderConfigTopic
> {
	constructor(config: NodeBuilderConfigTopic) {
		super(config, NodeType.topic);
		this.data = {
			...this.data,
			topicProps: config.topicProps,
		};
	}
}

export class NodeBuilderSubTopic extends NodeBuilderTopic {
	constructor(config: NodeBuilderConfigTopic) {
		super(config);
		this.type = NodeType.subtopic;
	}
}

export class NodeBuilderButton extends NodeBuilderWithContent<
	NodeDataShapeButton,
	NodeBuilderConfigButton
> {
	constructor(config: NodeBuilderConfigButton) {
		super(config, NodeType.button);
		this.data = {
			...this.data,
			buttonProps: config.buttonProps,
		};
	}
}
