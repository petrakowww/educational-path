import { Button, Label } from '@/shared/ui';

import {
	ArrowDownToLineIcon,
	ArrowUpToLineIcon,
	ArrowDownIcon,
	ArrowUpIcon,
} from 'lucide-react';

export const ComponentLayering = () => {
	return (
		<div className="flex gap-2 flex-col">
			<Label htmlFor="layering-buttons" className="text-foreground/80">
				Layering
			</Label>
			<div id="layering-buttons" className="flex gap-2">
				<Button className="w-6 h-6 p-0 m-0" variant={'outline'}>
					<ArrowUpToLineIcon />
				</Button>
				<Button className="w-6 h-6 p-0 m-0" variant={'outline'}>
					<ArrowUpIcon />
				</Button>
				<Button className="w-6 h-6 p-0 m-0" variant={'outline'}>
					<ArrowDownToLineIcon />
				</Button>
				<Button className="w-6 h-6 p-0 m-0" variant={'outline'}>
					<ArrowDownIcon />
				</Button>
			</div>
		</div>
	);
};
