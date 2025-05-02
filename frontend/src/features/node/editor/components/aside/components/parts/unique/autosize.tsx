import { autoSizeNode } from '@/features/node/editor/utils/node-autosize';
import { Button } from '@/shared/ui';
import { MoveHorizontalIcon } from 'lucide-react';
import { Node } from 'reactflow';

interface IComponentAutoSizeNode {
	editedNode: Node;
}

export const ComponentAutoSizeNode = ({editedNode} : IComponentAutoSizeNode) => {
	return (
		<Button variant={'outline'} onClick={() => autoSizeNode(editedNode)}>
			<MoveHorizontalIcon />
			Сбросить размер
		</Button>
	);
};
