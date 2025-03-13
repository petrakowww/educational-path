import { NodeLabelEnum } from '@/shared/lib/node/component';
import { useAppDispatch } from '@/shared/managers';
import { setType } from '@/shared/managers';
import { contentComponentCreator } from '../contstants/content-component-creator';

export const AsideBarWidgetComponentCreator = () => {
	const dispatch = useAppDispatch();

	const onDragStart = (event: React.DragEvent, nodeType: NodeLabelEnum) => {
		dispatch(setType(nodeType));
		event.dataTransfer.effectAllowed = 'move';
	};

	return (
		<aside className="absolute z-10 bg-background top-0 left-0 h-full shadow-right p-2 px-3 flex flex-col gap-2">
			<span className="text-foreground/60 text-[0.775rem]">
				COMPONENTS{' '}
				<span className="text-[0.675rem]">(Drag & Drop)</span>
			</span>
			{contentComponentCreator.map(({ title, IconNode }) => (
				<div
					key={title}
					onDragStart={(event) => onDragStart(event, title)}
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
