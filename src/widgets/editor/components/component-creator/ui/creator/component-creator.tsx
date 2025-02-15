import { NodeLabelEnum } from '@/shared/lib/node/component';
import { useAppDispatch } from '@/shared/lib';
import { setType } from '@/shared/managers';
import { CircleIcon, CircleDashedIcon } from 'lucide-react';

export const AsideBarWidgetComponentCreator = () => {
	const dispatch = useAppDispatch();

	const onDragStart = (event: React.DragEvent, nodeType: NodeLabelEnum) => {
		dispatch(setType(nodeType));
		event.dataTransfer.effectAllowed = 'move';
	};

	return (
		<aside className="absolute z-[10000] bg-background top-0 left-0 h-full shadow-right p-2 px-3 flex flex-col gap-2">
			<span className="text-foreground/60 text-[0.775rem]">
				COMPONENTS{' '}
				<span className="text-[0.675rem]">(Drag & Drop)</span>
			</span>
			<div
				onDragStart={(event) => onDragStart(event, NodeLabelEnum.topic)}
				draggable
				className="border-border border-[1px] px-2 py-1 rounded-md cursor-grab"
			>
				<span className="flex gap-2 p-1 items-center">
					<CircleIcon
						className="text-foreground/60"
						width={20}
						height={20}
					/>
					topic node
				</span>
			</div>
			<div
				onDragStart={(event) =>
					onDragStart(event, NodeLabelEnum.subtopic)
				}
				draggable
				className="border-border border-[1px] px-2 py-1 rounded-md cursor-grab"
			>
				<span className="flex gap-2 p-1 items-center">
					<CircleDashedIcon
						className="text-foreground/60"
						width={20}
						height={20}
					/>
					subtopic node
				</span>
			</div>
		</aside>
	);
};
