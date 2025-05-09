import { Node } from 'reactflow';
import {
	NodeBuilderConfig,
	NodeBuilderConfigChecklist,
	NodeBuilderConfigTopic,
	NodeBuilderConfigLinks,
	NodeBuilderConfigButton,
	NodeBuilderConfigTodo,
} from '../../config/node-builder-config';
import { DeepPartial } from '@/shared/lib/types/deep-partial';

import {
	NodeDataShapeChecklist,
	NodeDataShapeExtended,
	NodeDataShapeToDo,
	NodeDataShapeLinks,
	NodeMain,
	NodeType,
	NodeDataShapeTopic,
	NodeDataShapeButton,
} from '../../types/node';
import {
	ChecklistItem,
	CompletionType,
	NodeKind,
} from '@/shared/graphql/generated/output';

export class NodeBuilder<
	TData extends NodeMain = NodeMain,
	TConfig extends NodeBuilderConfig = NodeBuilderConfig,
> {
	protected data: DeepPartial<TData> = {};
	protected config: TConfig;
	protected id: string;
	protected position = { x: 0, y: 0 };
	protected type: NodeType;
	private width?: number;
	private height?: number;

	constructor(config: TConfig, type: NodeType) {
		this.config = config;
		this.id = crypto.randomUUID();
		this.type = type;
	}

	withTitle(title: string): this {
		this.data.title = title;
		return this;
	}

	withShowLabel(flag: boolean): this {
		this.data.canShowLabel = flag;
		return this;
	}

	withKind(kind: NodeKind): this {
		this.data.kind = kind;
		return this;
	}

	withCompletionType(type: CompletionType): this {
		this.data.completionType = type;
		return this;
	}

	withBackgroundColor(): this {
		this.data.meta = {
			...(this.data.meta ?? {}),
			blockProps: {
				...(this.data.meta?.blockProps ?? {}),
				backgroundColor: this.config.meta.blockProps.backgroundColor,
			},
		} as TData['meta'];
		return this;
	}

	withBorderColor(): this {
		this.data.meta = {
			...(this.data.meta ?? {}),
			blockProps: {
				...(this.data.meta?.blockProps ?? {}),
				borderColor: this.config.meta.blockProps.borderColor,
			},
		} as TData['meta'];
		return this;
	}

	withPadding(): this {
		this.data.meta = {
			...(this.data.meta ?? {}),
			blockProps: {
				...(this.data.meta?.blockProps ?? {}),
				padding: this.config.meta.blockProps.padding,
			},
		} as TData['meta'];
		return this;
	}

	withBorderWidth(): this {
		this.data.meta = {
			...(this.data.meta ?? {}),
			blockProps: {
				...(this.data.meta?.blockProps ?? {}),
				borderWidth: this.config.meta.blockProps.borderWidth,
			},
		} as TData['meta'];
		return this;
	}

	withBorderRadius(): this {
		this.data.meta = {
			...(this.data.meta ?? {}),
			blockProps: {
				...(this.data.meta?.blockProps ?? {}),
				borderRadius: this.config.meta.blockProps.borderRadius,
			},
		} as TData['meta'];
		return this;
	}

	withFontSize(): this {
		this.data.meta = {
			...(this.data.meta ?? {}),
			fontProps: {
				...(this.data.meta?.fontProps ?? {}),
				fontSize: this.config.meta.fontProps.fontSize,
			},
		} as TData['meta'];
		return this;
	}

	withFontWeight(): this {
		this.data.meta = {
			...(this.data.meta ?? {}),
			fontProps: {
				...(this.data.meta?.fontProps ?? {}),
				fontWeight: this.config.meta.fontProps.fontWeight,
			},
		} as TData['meta'];
		return this;
	}

	withFontColor(): this {
		this.data.meta = {
			...(this.data.meta ?? {}),
			fontProps: {
				...(this.data.meta?.fontProps ?? {}),
				fontColor: this.config.meta.fontProps.fontColor,
			},
		} as TData['meta'];
		return this;
	}

	withTextAlign(): this {
		this.data.meta = {
			...(this.data.meta ?? {}),
			fontProps: {
				...(this.data.meta?.fontProps ?? {}),
				textAlign: this.config.meta.fontProps.textAlign,
			},
		} as TData['meta'];
		return this;
	}

	withJustification(): this {
		this.data.meta = {
			...(this.data.meta ?? {}),
			fontProps: {
				...(this.data.meta?.fontProps ?? {}),
				justification: this.config.meta.fontProps.justification,
			},
		} as TData['meta'];
		return this;
	}

	withType(type: NodeType): this {
		this.type = type;
		return this;
	}

	withTodos(todos: ChecklistItem[]) {
		this.data.todo = todos;
		return this;
	}

	withPosition(x: number, y: number): this {
		this.position = { x, y };
		return this;
	}

	withSize(width?: number, height?: number) {
		this.width = width;
		this.height = height;
		return this;
	}

	withMeta(meta: any) {
		this.data.meta = meta;
		return this;
	}

	getData(): DeepPartial<TData> {
		return this.data;
	}

	build(id?: string): Node {
		return {
			id: id ?? crypto.randomUUID(),
			type: this.type,
			position: this.position,
			width: this.width,
			height: this.height,
			data: this.data,
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
	NodeBuilderConfigTodo
> {
	constructor(config: NodeBuilderConfigTodo) {
		super(config, NodeType.todo);
		this.data = {
			...this.data,
			todos: config.todos,
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
			todos: config.todos,
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
