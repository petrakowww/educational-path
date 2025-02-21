import {
	Background,
	BackgroundVariant,
	Controls,
	ReactFlow,
	useEdgesState,
	Node,
	NodeChange,
	useReactFlow,
} from 'reactflow';
import '@xyflow/react/dist/style.css';
import { nodeTypes } from '@/widgets/node/container';
import {
	onNodesChange,
	setSelectedNode,
	setNodes,
	setEditorStatusMenu,
	resetNodeSize,
	setFocusingLabel,
} from '@/shared/managers';
import { useAppDispatch, useAppSelector } from '@/shared/managers';
import React, { useCallback, useMemo } from 'react';
import { GraphNodeBaseEditor } from '@/shared/lib/node/editor';
import {
	GraphNodeComponent,
	GraphNodeLabelProps,
} from '@/shared/lib/node/component';

export const FlowEditor = () => {
	const { screenToFlowPosition } = useReactFlow();

	const dispatch = useAppDispatch();

	const nodes = useAppSelector((state) => state.editor.nodes);
	const type = useAppSelector((state) => state.dnd_editor.type);

	const memoizedNodes = useMemo(() => nodes, [nodes]);

	const memoizedType = useMemo(() => type, [type]);

	const [edges, setEdges, onEdgesChange] = useEdgesState([]);

	const onDragOver = useCallback((event: React.DragEvent) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = 'move';
	}, []);

	const onDrop = useCallback(
		(event: React.DragEvent) => {
			event.preventDefault();

			if (
				!memoizedType ||
				!GraphNodeBaseEditor.isValidNodeType(memoizedType)
			) {
				return;
			}

			const position = screenToFlowPosition({
				x: event.clientX,
				y: event.clientY,
			});

			const newNode = GraphNodeBaseEditor.createGraphNode(
				memoizedType,
				position
			);
			dispatch(setNodes([...memoizedNodes, newNode]));
		},
		[dispatch, screenToFlowPosition, memoizedType, memoizedNodes]
	);

	const handleFlowEditorOnClick = useCallback(() => {
		dispatch(setSelectedNode(null));
		dispatch(setEditorStatusMenu(false));
	}, [dispatch]);

	const handleNodeDoubleClick = (
		e: React.MouseEvent,
		node: Node<GraphNodeComponent<GraphNodeLabelProps>>
	) => {
		e.stopPropagation();
		console.log(node);
		if (node.data.dataTProps?.labelProps?.label) {
			dispatch(setFocusingLabel(true));
		}
	};

	const handleNodeClick = useCallback(
		(e: React.MouseEvent, node: Node<unknown>) => {
			e.stopPropagation();
			dispatch(setSelectedNode(node.id));
			dispatch(setEditorStatusMenu(true));
		},
		[dispatch]
	);

	const handleNodeDrag = useCallback(
		(e: React.MouseEvent, node: Node<unknown>) => {
			dispatch(setSelectedNode(node.id));
		},
		[dispatch]
	);

	const handleNodesChange = useCallback(
		(changes: NodeChange[]) => {
			changes.forEach((change) => {
				if (change.type === 'dimensions') {
					const nodeToUpdate = memoizedNodes.find(
						(n) => n.id === change.id
					);
					if (!nodeToUpdate) return;

					const newWidth =
						change.dimensions?.width ?? nodeToUpdate.width;
					const newHeight =
						change.dimensions?.height ?? nodeToUpdate.height;

					if (
						newWidth !== nodeToUpdate.width ||
						newHeight !== nodeToUpdate.height
					) {
						resetNodeSize(change.id, newWidth, newHeight);
					}
				}
			});

			dispatch(onNodesChange(changes));
		},
		[dispatch, memoizedNodes]
	);

	const edgeTypes = useMemo(() => ({}), []);
	return (
		<div className="h-full w-full">
			<ReactFlow
				edges={edges}
				nodes={memoizedNodes}
				onEdgesChange={onEdgesChange}
				onNodesChange={handleNodesChange}
				nodeTypes={nodeTypes}
				edgeTypes={edgeTypes}
				onClick={handleFlowEditorOnClick}
				onNodeDoubleClick={handleNodeDoubleClick}
				onNodeClick={handleNodeClick}
				onNodeDrag={handleNodeDrag}
				onDrop={onDrop}
				onDragOver={onDragOver}
				minZoom={0.2}
			>
				<Controls position="top-right" style={{ right: '-10px' }} />
				<Background
					variant={BackgroundVariant.Dots}
					gap={12}
					size={1}
				/>
			</ReactFlow>
		</div>
	);
};
