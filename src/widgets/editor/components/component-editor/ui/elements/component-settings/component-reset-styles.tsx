import { Node } from 'reactflow';
import {
	Button,
	Label,
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/shared/ui';
import { GraphNodeComponent } from '@/shared/lib/node/component';
import {
	GraphNodeFontProps,
	GraphNodeAlignmentTextProps,
	GraphNodeBlockProps,
} from '@/shared/lib/node/component';
import { InfoIcon } from 'lucide-react';
import { GraphNodeBaseEditor } from '@/shared/lib/node/editor';

interface ComponentResetStylesProps {
	editedNode: Node<
		GraphNodeComponent<
			Partial<
				GraphNodeFontProps &
					GraphNodeBlockProps &
					GraphNodeAlignmentTextProps
			>
		>
	>;
}

export const ComponentResetStyles = ({
	editedNode,
}: ComponentResetStylesProps) => {
	const resetNodeComponentStyles = () => {
		if (!editedNode) return;

		GraphNodeBaseEditor.resetNodeStyles({editedNode: editedNode});
	};

	return (
		<div className="flex gap-2 flex-col">
			<div className="flex gap-2 items-center text-sm">
				<Label className="text-foreground/80">About styles</Label>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<InfoIcon width={20} height={20} />
						</TooltipTrigger>
						<TooltipContent>
							<p>
								Deletes all the specified styles for the
								component
							</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>

			<Button variant={'destructive'} onClick={resetNodeComponentStyles}>
				Reset styles
			</Button>
		</div>
	);
};
