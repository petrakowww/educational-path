'use client';

import { useEffect, useState } from 'react';
import {
	DragDropContext,
	Draggable,
	Droppable,
	DropResult,
} from '@hello-pangea/dnd';
import { Grip, Pencil } from 'lucide-react';
import { Badge, Button } from '@/shared/ui';
import { GetVideoCourseQuery } from '@/shared/graphql/generated/output';

interface ChaptersListProps {
	items: GetVideoCourseQuery['videoCourse']['chapters'];
	onReorder: (updateData: { id: string; position: number }[]) => void;
	onEditChapter: (chapterId: string) => void;
}

export const ChaptersList = ({
	onEditChapter,
	items,
	onReorder,
}: ChaptersListProps) => {
	const [isMounted, setIsMounted] = useState(false);
	const [chapters, setChapters] = useState(items);

	useEffect(() => setIsMounted(true), []);
	useEffect(() => setChapters(items), [items]);

	if (!isMounted) return null;

	const onDragEnd = (result: DropResult) => {
		if (!result.destination) return;

		const itemsCopy = [...chapters];
		const [reorderedItem] = itemsCopy.splice(result.source.index, 1);
		itemsCopy.splice(result.destination.index, 0, reorderedItem);

		setChapters(itemsCopy);

		const updated = itemsCopy.map((chapter, index) => ({
			id: chapter.id,
			position: index,
		}));

		onReorder(updated);
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId="chapters">
				{(provided) => (
					<div {...provided.droppableProps} ref={provided.innerRef}>
						{chapters.map((chapter, index) => (
							<Draggable
								key={chapter.id}
								draggableId={chapter.id}
								index={index}
							>
								{(provided) => (
									<div
										ref={provided.innerRef}
										{...provided.draggableProps}
										className="flex items-center bg-muted border rounded-md px-2 py-3 mb-3 dark:bg-slate-800"
									>
										<div
											{...provided.dragHandleProps}
											className="mr-3 text-muted-foreground cursor-grab"
										>
											<Grip className="w-4 h-4" />
										</div>
										<div className="flex-1 text-sm">
											{chapter.title}
										</div>
										<div className="flex items-center gap-2 ml-auto">
											<Badge
												variant={
													chapter.isPublished
														? 'default'
														: 'outline'
												}
											>
												{chapter.isPublished
													? 'Опубликовано'
													: 'Черновик'}
											</Badge>
											<Button
												size="icon"
												variant="ghost"
												onClick={() =>
													onEditChapter(chapter.id)
												} // <- новое поведение
											>
												<Pencil className="w-4 h-4" />
											</Button>
										</div>
									</div>
								)}
							</Draggable>
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
};
