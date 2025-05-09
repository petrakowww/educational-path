import { NodeDataShapeToDo } from "@/features/node/editor/types/node";
import { NodeProps } from "reactflow";
import { EdgeConnectableViewNodes } from "./base/edge-connectable-view";
import { SkeletonViewNode } from "./base/skeleton-view-node";
import { memo } from "react";

export const TodoViewNode = (props: NodeProps<NodeDataShapeToDo>) => {
	const { data } = props;
	const taskText = data.todos?.[0]?.text ?? 'Задача не задана';
	return (
		<SkeletonViewNode
			nodeProps={props}
			style={{
				backgroundColor: data.meta.blockProps
					?.backgroundColor as string,
				borderColor: data.meta.blockProps?.borderColor as string,
			}}
		>
			<EdgeConnectableViewNodes nodeProps={props} canHandle={false}>
				<div
					className="w-full flex items-center justify-center gap-2 px-3 py-4"
					style={{
						padding: data.meta.blockProps?.padding ?? 8,
					}}
				>
					<div className="w-5 h-5 border border-foreground/50 rounded-md flex-shrink-0" />
					<p
						className="text-sm leading-snug text-left truncate"
						style={{
							fontSize: data.meta.fontProps?.fontSize,
							color: data.meta.fontProps?.fontColor as string,
						}}
						title={taskText}
					>
						{taskText}
					</p>
				</div>
			</EdgeConnectableViewNodes>
		</SkeletonViewNode>
	);
};

export const TodoViewNodeMemo = memo(TodoViewNode);