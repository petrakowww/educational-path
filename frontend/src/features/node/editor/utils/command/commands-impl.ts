import { CommandBase } from './commands';
import {
	BorderRadiusEnum,
	JustificationEnum,
	TextAlignmentEnum,
	TextFontWeightEnum,
} from '../../types/styles';
import { useNodeStore } from '@/shared/managers/store/nodes.store';
import { CompletionType, NodeKind } from '@/shared/graphql/generated/output';

const updateNodeProperties = useNodeStore.getState().updateNodeProperties;

export class WithBackgroundColorCommand extends CommandBase<React.CSSProperties['color'] | null> {
	execute(): void {
		updateNodeProperties({
			nodeId: this.nodeId,
			properties: {
				data: {
					meta: {
						blockProps: {
							backgroundColor: this.newProperties,
						},
					},
				},
			},
		});
	}
}

export class WithBorderColorCommand extends CommandBase<React.CSSProperties['color'] | null> {
	execute(): void {
		updateNodeProperties({
			nodeId: this.nodeId,
			properties: {
				data: {
					meta: {
						blockProps: {
							borderColor: this.newProperties,
						},
					},
				},
			},
		});
	}
}

export class WithPaddingCommand extends CommandBase<number | null> {
	execute(): void {
		updateNodeProperties({
			nodeId: this.nodeId,
			properties: {
				data: {
					meta: {
						blockProps: {
							padding: this.newProperties,
						},
					},
				},
			},
		});
	}
}

export class WithBorderRadiusCommand extends CommandBase<BorderRadiusEnum | number> {
	execute(): void {
		updateNodeProperties({
			nodeId: this.nodeId,
			properties: {
				data: {
					meta: {
						blockProps: {
							borderRadius: this.newProperties,
						},
					},
				},
			},
		});
	}
}

export class WithBorderWidthCommand extends CommandBase<number | null> {
	execute(): void {
		updateNodeProperties({
			nodeId: this.nodeId,
			properties: {
				data: {
					meta: {
						blockProps: {
							borderWidth: this.newProperties,
						},
					},
				},
			},
		});
	}
}

export class WithFontSizeCommand extends CommandBase<number> {
	execute(): void {
		updateNodeProperties({
			nodeId: this.nodeId,
			properties: {
				data: {
					meta: {
						fontProps: {
							fontSize: this.newProperties,
						},
					},
				},
			},
		});
	}
}

export class WithFontColorCommand extends CommandBase<React.CSSProperties['color'] | null> {
	execute(): void {
		updateNodeProperties({
			nodeId: this.nodeId,
			properties: {
				data: {
					meta: {
						fontProps: {
							fontColor: this.newProperties,
						},
					},
				},
			},
		});
	}
}

export class WithFontWeightCommand extends CommandBase<TextFontWeightEnum | number> {
	execute(): void {
		updateNodeProperties({
			nodeId: this.nodeId,
			properties: {
				data: {
					meta: {
						fontProps: {
							fontWeight: this.newProperties,
						},
					},
				},
			},
		});
	}
}

export class WithTextAlignCommand extends CommandBase<TextAlignmentEnum> {
	execute(): void {
		updateNodeProperties({
			nodeId: this.nodeId,
			properties: {
				data: {
					meta: {
						fontProps: {
							textAlign: this.newProperties,
						},
					},
				},
			},
		});
	}
}

export class WithJustificationCommand extends CommandBase<JustificationEnum> {
	execute(): void {
		updateNodeProperties({
			nodeId: this.nodeId,
			properties: {
				data: {
					meta: {
						fontProps: {
							justification: this.newProperties,
						},
					},
				},
			},
		});
	}
}

export class WithTitleCommand extends CommandBase<string> {
	execute(): void {
		updateNodeProperties({
			nodeId: this.nodeId,
			properties: {
				data: {
					title: this.newProperties,
				},
			},
		});
	}
}

export class WithKindCommand extends CommandBase<NodeKind> {
	execute(): void {
		updateNodeProperties({
			nodeId: this.nodeId,
			properties: {
				data: {
					kind: this.newProperties,
				},
			},
		});
	}
}

export class WithCompletionTypeCommand extends CommandBase<CompletionType> {
	execute(): void {
		updateNodeProperties({
			nodeId: this.nodeId,
			properties: {
				data: {
					completionType: this.newProperties,
				},
			},
		});
	}
}
