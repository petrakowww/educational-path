import { CommandBase } from '@/features/node/editor/utils/command/commands';
import { useNodeStore } from '@/shared/managers/store/editor/nodes-editor.store';

const updateNodeProperties = useNodeStore.getState().updateNodeProperties;

export class WithButtonUrlCommand extends CommandBase<string | null> {
	execute(): void {
		updateNodeProperties({
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
