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
import { NodeDeleterFactory } from '@/features/node/editor/utils/delete/node-deleter-factory';

interface ComponentDestroyNodeProps {
	editedNode: Node;
}

export const ComponentDestroyNode = (props: ComponentDestroyNodeProps) => {
	const { editedNode } = props;

	const handleDelete = () => {
		const deleter = NodeDeleterFactory.createDeleter(editedNode);
		deleter.delete();
	};

	return (
		<div className="flex gap-2 flex-col">
			<div className="flex gap-2 items-center text-sm">
				<Label className="text-foreground/80">О удаление</Label>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<InfoIcon width={20} height={20} />
						</TooltipTrigger>
						<TooltipContent>
							<p>Отмена удаления невозможна!</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>

			<Button variant={'destructive'} onClick={handleDelete}>
				Удалить узел
				<OctagonMinusIcon />
			</Button>
		</div>
	);
};
