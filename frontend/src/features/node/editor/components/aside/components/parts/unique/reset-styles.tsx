import { Node } from 'reactflow';
import {
	Button,
	Label,
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/shared/ui';
import { InfoIcon } from 'lucide-react';
import { NodeDataShape, NodeType } from '@/features/node/editor/types/node';
import { nodeBuilderRegistry } from '@/features/node/editor/config/node-templates-config';
import { NodeStyleBuilder } from '@/features/node/editor/utils/core/node-style-builder';
import { useNodeStore } from '@/shared/managers/store/nodes.store';

interface ComponentResetStylesProps {
	editedNode: Node<NodeDataShape>;
}

export const ComponentResetStyles = ({
	editedNode,
}: ComponentResetStylesProps) => {
	const { updateNodeProperties } = useNodeStore();

	const resetNodeComponentStyles = () => {
		if (!editedNode || !editedNode.data) return;

		const nodeType = editedNode.type as NodeType | undefined;
		const nodeBuilder = nodeType
			? nodeBuilderRegistry[nodeType]
			: undefined;

		if (!nodeBuilder) {
			console.warn(
				`Нет функции конфига для типа ноды: ${editedNode.type}`
			);
			return;
		}

		const defaultStyles = new NodeStyleBuilder(nodeBuilder()).buildStyles();

		if (!defaultStyles) {
			console.warn(
				`Не удалось получить стили для типа ноды: ${editedNode.type}`
			);
			return;
		}

		updateNodeProperties({
			nodeId: editedNode.id,
			properties: {
				data: {
					...defaultStyles,
				},
			},
		});
	};

	return (
		<div className="flex gap-2 flex-col">
			<div className="flex gap-2 items-center text-sm">
				<Label className="text-foreground/80">О стилях</Label>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<InfoIcon width={20} height={20} />
						</TooltipTrigger>
						<TooltipContent>
							<p>Удаляет все указанные стили для компонента</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>

			<Button variant={'destructive'} onClick={resetNodeComponentStyles}>
				Сбросить стили
			</Button>
		</div>
	);
};
