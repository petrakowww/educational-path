import {
	Background,
	BackgroundVariant,
	Controls,
	ReactFlow,
	useEdgesState,
	Node,
	NodeChange,
	useReactFlow,
	applyNodeChanges,
} from 'reactflow';
import '@xyflow/react/dist/style.css';
import React, { useCallback, useMemo } from 'react';

import { nodeBuilderRegistry } from '../config/node-templates-config';
import { NodeDataShape } from '../types/node';
import { nodeVisualComponents } from '@/shared/node/fabric/node-components';
import { useNodeStore } from '@/shared/managers/store/nodes.store';
import { useEditorAsideStore } from '@/shared/managers/store/editor.store';
import { useDragAndDropStore } from '@/shared/managers/store/dnd.store';

export const Editor = () => {
	const { screenToFlowPosition } = useReactFlow();

	const { nodesList, selectedNodeId, setNodes, setNode } = useNodeStore();

	const { setEditorStatusMenu, setFocusingLabel } = useEditorAsideStore();

	const type = useDragAndDropStore((state) => state.type);

	const memoizedNodes = useMemo(() => nodesList, [nodesList]);

	const memoizedType = useMemo(() => type, [type]);

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [edges, setEdges, onEdgesChange] = useEdgesState([]);

	const onDragOver = useCallback((event: React.DragEvent) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = 'move';
	}, []);

	const onDrop = useCallback(
		(event: React.DragEvent) => {
			event.preventDefault();

			if (!memoizedType) {
				return;
			}

			const position = screenToFlowPosition({
				x: event.clientX,
				y: event.clientY,
			});

			const nodeBuilderFunction = nodeBuilderRegistry[memoizedType];
			const newNode = nodeBuilderFunction()
				.withPosition(position.x, position.y)
				.build();

			setNodes([...memoizedNodes, newNode]);
		},
		[screenToFlowPosition, setNodes, memoizedType, memoizedNodes]
	);

	const handleFlowEditorOnClick = useCallback(() => {
		setNode(null);
		setEditorStatusMenu(false);
	}, [setNode, setEditorStatusMenu]);

	const handleNodeDoubleClick = useCallback(
		(e: React.MouseEvent, node: Node<NodeDataShape>) => {
			e.stopPropagation();
			if (node.data.labelProps?.label) {
				setFocusingLabel(true);
			}
		},
		[setFocusingLabel]
	);

	const handleNodeClick = useCallback(
		(e: React.MouseEvent, node: Node<unknown>) => {
			e.stopPropagation();
			if (node.id !== selectedNodeId) {
				setNode(node);
				setEditorStatusMenu(true);
			}
		},
		[setNode, setEditorStatusMenu, selectedNodeId]
	);

	const handleNodeDrag = useCallback(
		(e: React.MouseEvent, node: Node<unknown>) => {
			if (node.id !== selectedNodeId) {
				setNode(node);
			}
		},
		[setNode, selectedNodeId]
	);

	const handleNodesChange = useCallback(
		(changes: NodeChange[]) => {
			const updatedNodes = applyNodeChanges(changes, memoizedNodes);
			setNodes(updatedNodes);
		},
		[memoizedNodes, setNodes]
	);
	const edgeTypes = useMemo(() => ({}), []);
	return (
		<div className="h-full w-full">
			<ReactFlow
				edges={edges}
				nodes={memoizedNodes}
				onEdgesChange={onEdgesChange}
				onNodesChange={handleNodesChange}
				nodeTypes={nodeVisualComponents}
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
