import { GraphNodeBaseEditor } from '@/shared/lib/node/editor';
import { Button } from '@/shared/ui';
import { MoveHorizontalIcon } from 'lucide-react';

export const ComponentAutoSize = () => {
	const handleAutoSizeEditor = () => {
		GraphNodeBaseEditor.autoSize();
	};

	return (
		<Button variant={'outline'} onClick={handleAutoSizeEditor}>
			<MoveHorizontalIcon />
			Auto-size
		</Button>
	);
};
