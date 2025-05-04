import { nodePosition } from '@/features/node/editor/utils/node-position';
import { useNodeStore } from '@/shared/managers/store/nodes.store';

export const ComponentNodeCharacteristics = () => {
	const node = useNodeStore((state) =>
		state.selectedNodeId ? state.nodesById[state.selectedNodeId] : null
	);

	if (!node) return null;

	const xValue = nodePosition.getXPosition(node);
	const yValue = nodePosition.getYPosition(node);
	const wValue = nodePosition.getWidth(node);
	const hValue = nodePosition.getHeight(node);

	return (
		<div className="grid grid-cols-2 gap-4 text-sm">
			<div className="flex gap-4 ">
				<span className="ml-2 text-[0.785rem] text-foreground/60 w-4">
					X
				</span>
				<span className="truncate max-w-20">{xValue}</span>
			</div>
			<div className="flex gap-4 ">
				<span className="ml-2 text-[0.785rem] text-foreground/60 w-4">
					Y
				</span>
				<span className="truncate max-w-20">{yValue}</span>
			</div>
			<div className="flex gap-4 ">
				<span className="ml-2 text-[0.785rem] text-foreground/60 w-4">
					W
				</span>
				<span className="truncate max-w-20">{wValue}</span>
			</div>
			<div className="flex gap-4 ">
				<span className="ml-2 text-[0.785rem] text-foreground/60 w-4">
					H
				</span>
				<span className="truncate max-w-20">{hValue}</span>
			</div>
		</div>
	);
};
