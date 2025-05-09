import { useNodeStore } from '@/shared/managers/store/editor/nodes-editor.store';
import { Button, Label } from '@/shared/ui';
import {
	ArrowDownToLineIcon,
	ArrowUpToLineIcon,
	ArrowDownIcon,
	ArrowUpIcon,
} from 'lucide-react';

import { shallow } from 'zustand/shallow';

export const ComponentLayering = () => {
	const [
		selectedNodeId,
		moveNodeToTop,
		moveNodeUp,
		moveNodeDown,
		moveNodeToBottom,
	] = useNodeStore(
		(state) => [
			state.selectedNodeId,
			state.moveNodeToTop,
			state.moveNodeUp,
			state.moveNodeDown,
			state.moveNodeToBottom,
		],
		shallow
	);

	const isDisabled = !selectedNodeId;

	return (
		<div className="flex gap-2 flex-col">
			<Label htmlFor="layering-buttons" className="text-foreground/80">
				Расположение по слою
			</Label>
			<div id="layering-buttons" className="flex gap-2">
				<Button
					className="w-6 h-6 p-0 m-0"
					variant="outline"
					onClick={() =>
						selectedNodeId && moveNodeToTop(selectedNodeId)
					}
					disabled={isDisabled}
					title="В самый вверх"
				>
					<ArrowUpToLineIcon className="w-4 h-4" />
				</Button>
				<Button
					className="w-6 h-6 p-0 m-0"
					variant="outline"
					onClick={() => selectedNodeId && moveNodeUp(selectedNodeId)}
					disabled={isDisabled}
					title="В вверх"
				>
					<ArrowUpIcon className="w-4 h-4" />
				</Button>
				<Button
					className="w-6 h-6 p-0 m-0"
					variant="outline"
					onClick={() =>
						selectedNodeId && moveNodeToBottom(selectedNodeId)
					}
					disabled={isDisabled}
					title="В самый низ"
				>
					<ArrowDownToLineIcon className="w-4 h-4" />
				</Button>
				<Button
					className="w-6 h-6 p-0 m-0"
					variant="outline"
					onClick={() =>
						selectedNodeId && moveNodeDown(selectedNodeId)
					}
					disabled={isDisabled}
					title="В низ"
				>
					<ArrowDownIcon className="w-4 h-4" />
				</Button>
			</div>
		</div>
	);
};
