import { CommandBase } from '@/features/node/editor/utils/command/commands';
import { ChecklistItem } from '@/shared/graphql/generated/output';
import { useNodeStore } from '@/shared/managers/store/editor/nodes-editor.store';

const updateNodeProperties = useNodeStore.getState().updateNodeProperties;

export class WithChecklistTodosCommand extends CommandBase<ChecklistItem[]> {
	execute(): void {
		updateNodeProperties({
			nodeId: this.nodeId,
			properties: {
				data: {
					todos: this.newProperties,
				},
			},
		});
	}
}
