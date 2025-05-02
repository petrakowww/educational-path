import { nodeLabelsForCreation } from './content-component-creator';
import { NodeType } from '../../../types/node';
import { useCallback } from 'react';
import { useDragAndDropStore } from '@/shared/managers/store/dnd.store';

export const AsideBarComponentCreator = () => {
	const { setNodeType } = useDragAndDropStore();

	const onDragStart = useCallback(
		(event: React.DragEvent, nodeType: NodeType) => {
			setNodeType(nodeType);
			event.dataTransfer.effectAllowed = 'move';
		},
		[setNodeType]
	);

	return (
		<aside className="absolute z-10 bg-background top-0 left-0 h-full shadow-right p-2 px-3 flex flex-col gap-2">
			<span className="text-foreground/60 text-[0.775rem]">
				КОМПОНЕНТЫ{' '}
				<span className="text-[0.675rem]">(Зажми & Перетащи)</span>
			</span>
			{nodeLabelsForCreation.map(({ title, type, IconNode }) => (
				<div
					key={title}
					onDragStart={(event) => onDragStart(event, type)}
					draggable
					className="border-border border-[1px] px-2 py-1 rounded-md cursor-grab"
				>
					<span className="flex gap-2 p-1 items-center">
						<IconNode width={20} height={20} />
						{title}
					</span>
				</div>
			))}
		</aside>
	);
};
