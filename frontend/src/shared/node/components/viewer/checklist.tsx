import { NodeDataShapeChecklist } from "@/features/node/editor/types/node";
import { NodeProps } from "reactflow";
import { EdgeConnectableViewNodes } from "./base/edge-connectable-view";
import { SkeletonViewNode } from "./base/skeleton-view-node";
import { memo } from "react";

export const ChecklistViewNode = (props: NodeProps<NodeDataShapeChecklist>) => {
	const { data } = props;
	const todos = data.todos ?? [];
	return (
		<SkeletonViewNode
			nodeProps={props}
			style={{
				backgroundColor: data.meta.blockProps
					?.backgroundColor as string,
				borderColor: data.meta.blockProps?.borderColor as string,
			}}
			stylesForComponent="justify-start items-start"
		>
			<EdgeConnectableViewNodes nodeProps={props} canHandle={false}>
				<div className="flex flex-col gap-2 p-3">
					{todos.length > 0 ? (
						<div className="flex flex-col gap-1.5">
							{todos.map((todo) => (
								<div key={todo.id} className="flex gap-2 items-center">
									<div
										className="w-6 h-6 aspect-square border border-foreground/50 rounded-md cursor-pointer"
										onClick={(e) => e.stopPropagation()}
									/>
									<span className="whitespace-pre-wrap text-nowrap text-lg text-foreground">
										{todo.text || 'Без текста'}
									</span>
								</div>
							))}
						</div>
					) : (
						<span className="text-xs text-muted-foreground">
							Список задач пуст
						</span>
					)}
				</div>
			</EdgeConnectableViewNodes>
		</SkeletonViewNode>
	);
};

export const ChecklistViewNodeMemo = memo(ChecklistViewNode);