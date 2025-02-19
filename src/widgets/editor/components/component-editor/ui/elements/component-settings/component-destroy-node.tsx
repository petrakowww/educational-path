import { GraphNodeComponent } from '@/shared/lib/node/component';
import { Node } from 'reactflow';
import {
	Button,
	Label,
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/shared/ui';
import { InfoIcon, OctagonMinusIcon } from 'lucide-react';
import { GraphNodeBaseEditor } from '@/shared/lib/node/editor';

interface ComponentDestroyNodeProps {
	editedNode: Node<GraphNodeComponent<never>>;
}

export const ComponentDestroyNode = (props: ComponentDestroyNodeProps) => {
	const { editedNode } = props;

	const handleDelete = () => {
		GraphNodeBaseEditor.deleteNode(editedNode.id);
	};

	return (
		<div className="flex gap-2 flex-col">
			<div className="flex gap-2 items-center text-sm">
				<Label className="text-foreground/80">About delete</Label>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<InfoIcon width={20} height={20} />
						</TooltipTrigger>
						<TooltipContent>
							<p>Сancellation is not possible</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>

			<Button variant={'destructive'} onClick={handleDelete}>
				Delete node
				<OctagonMinusIcon />
			</Button>
		</div>
	);
};
