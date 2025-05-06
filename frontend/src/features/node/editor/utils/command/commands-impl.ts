import { CommandBase } from './commands';
import {
	BorderRadiusEnum,
	JustificationEnum,
	TextAlignmentEnum,
	TextFontWeightEnum,
} from '../../types/styles';
import { ToDo, ToDos } from '../../types/extended-node';
import { useNodeStore } from '@/shared/managers/store/nodes.store';
import { NodeDataShapeButton, NodeDataShapeChecklist, NodeDataShapeToDo } from '../../types/node';

const updateNodeProperties = useNodeStore.getState().updateNodeProperties;

export class WithBackgroundColorCommand extends CommandBase<React.CSSProperties['color'] | null> {
	execute(): void {
		updateNodeProperties({
			nodeId: this.nodeId,
			properties: {
				data: {
					blockProps: {
						backgroundColor: this.newProperties,
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
					blockProps: {
						borderColor: this.newProperties,
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
					fontProps: {
						fontSize: this.newProperties,
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
					fontProps: {
						fontColor: this.newProperties,
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
					blockProps: {
						borderWidth: this.newProperties,
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
					blockProps: {
						borderRadius: this.newProperties,
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
					fontProps: {
						fontWeight: this.newProperties,
					},
				},
			},
		});
	}
}

export class WithTextAlignCommand extends CommandBase<TextAlignmentEnum> {
	execute(): void {
		const textAlign = this.newProperties ?? TextAlignmentEnum.Center;
		updateNodeProperties({
			nodeId: this.nodeId,
			properties: {
				data: {
					fontProps: {
						textAlign,
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
					fontProps: {
						justification: this.newProperties,
					},
				},
			},
		});
	}
}

export class WithButtonCommand extends CommandBase<string | null> {
	execute(): void {
		updateNodeProperties<NodeDataShapeButton>({
			nodeId: this.nodeId,
			properties: {
				data: {
					buttonProps: {
						url: this.newProperties,
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
					blockProps: {
						padding: this.newProperties,
					},
				},
			},
		});
	}
}

export class WithChecklistToDoCommand extends CommandBase<ToDos> {
	execute(): void {
		updateNodeProperties<NodeDataShapeChecklist>({
			nodeId: this.nodeId,
			properties: {
				data: {
					checklistProps: {
						todos: this.newProperties,
					},
				},
			},
		});
	}
}

export class WithToDoCommand extends CommandBase<ToDo> {
	execute(): void {
		updateNodeProperties<NodeDataShapeToDo>({
			nodeId: this.nodeId,
			properties: {
				data: {
					todoProps: {
						todo: this.newProperties,
					},
				},
			},
		});
	}
}
