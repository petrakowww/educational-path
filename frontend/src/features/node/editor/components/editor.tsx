import {
	Background,
	BackgroundVariant,
	Controls,
	ReactFlow,
	applyEdgeChanges,
	EdgeChange,
	Node,
	NodeChange,
	useReactFlow,
	applyNodeChanges,
	addEdge,
	Connection,
	Edge,
} from 'reactflow';
import '@xyflow/react/dist/style.css';
import React, { useCallback, useMemo } from 'react';

import { nodeBuilderRegistry } from '../config/node-templates-config';
import { NodeDataShape } from '../types/node';
import { nodeVisualComponents } from '@/shared/node/fabric/node-components';
import { useNodeStore } from '@/shared/managers/store/nodes.store';
import { useEditorAsideStore } from '@/shared/managers/store/editor.store';
import { useDragAndDropStore } from '@/shared/managers/store/dnd.store';
import { createsCycle } from '../utils/edges/creates-cycle';
import { CustomEdge } from '@/shared/edge/components/edge';
import { useEdgeStore } from '@/shared/managers/store/edge.store';
import { shallow } from 'zustand/vanilla/shallow';
import { defaultEdgeConfig } from '@/shared/edge/config/edge.config';

export const Editor = () => {
	const { screenToFlowPosition } = useReactFlow();

	const { nodesList, selectedNodeId, setNodes, setNode } = useNodeStore(
		(state) => ({
			nodesList: state.nodesList,
			selectedNodeId: state.selectedNodeId,
			setNodes: state.setNodes,
			setNode: state.setNode,
		}),
		shallow
	);

	const { setSelectedEdge, clearSelectedEdge, edges, setEdges } =
		useEdgeStore(
			(state) => ({
				selectedEdgeId: state.selectedEdgeId,
				setSelectedEdge: state.setSelectedEdge,
				clearSelectedEdge: state.clearSelectedEdge,
				edges: state.edges,
				setEdges: state.setEdges,
			}),
			shallow
		);

	const { openEditor, closeEditor, setFocusingLabel } = useEditorAsideStore();

	const type = useDragAndDropStore((state) => state.type);

	const memoizedType = useMemo(() => type, [type]);

	const edgeTypes = useMemo(
		() => ({
			custom: CustomEdge,
		}),
		[]
	);

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

			setNodes([...nodesList, newNode]);
		},
		[screenToFlowPosition, setNodes, memoizedType, nodesList]
	);

	const handleFlowEditorOnClick = useCallback(() => {
		setNode(null);
		clearSelectedEdge();
		closeEditor();
	}, [setNode, clearSelectedEdge, closeEditor]);

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
		(e: React.MouseEvent, node: Node) => {
			e.stopPropagation();

			setNode(node);
			clearSelectedEdge();
			openEditor('node');
		},
		[setNode, clearSelectedEdge, openEditor]
	);

	const handleEdgeClick = useCallback(
		(e: React.MouseEvent, edge: Edge) => {
			e.stopPropagation();

			setSelectedEdge(edge);
			setNode(null);
			openEditor('edge');
		},
		[setSelectedEdge, setNode, openEditor]
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
			const updatedNodes = applyNodeChanges(changes, nodesList);
			setNodes(updatedNodes);
		},
		[nodesList, setNodes]
	);

	const handleEdgesChange = useCallback(
		(changes: EdgeChange[]) => {
			const updatedEdges = applyEdgeChanges(changes, edges);
			setEdges(updatedEdges);
		},
		[edges, setEdges]
	);

	const onConnect = useCallback(
		(connection: Connection) => {
			if (!connection.source || !connection.target) return;
			if (connection.source === connection.target) return;
			if (createsCycle(connection.source, connection.target, edges)) {
				console.warn('Цикл недопустим');
				return;
			}

			const newEdges = addEdge(
				{
					...connection,
					...defaultEdgeConfig
				},
				edges
			);

			setEdges(newEdges);
		},
		[edges, setEdges]
	);

	return (
		<div className="h-full w-full">
			<ReactFlow
				edges={edges}
				nodes={nodesList}
				onEdgesChange={handleEdgesChange}
				onNodesChange={handleNodesChange}
				nodeTypes={nodeVisualComponents}
				edgeTypes={edgeTypes}
				onClick={handleFlowEditorOnClick}
				onNodeDoubleClick={handleNodeDoubleClick}
				onNodeClick={handleNodeClick}
				onEdgeClick={handleEdgeClick}
				onNodeDrag={handleNodeDrag}
				onDrop={onDrop}
				onDragOver={onDragOver}
				onConnect={onConnect}
				minZoom={0.2}
			>
				<Controls position="top-right"/>
			</ReactFlow>
			
			<Background variant={BackgroundVariant.Dots} gap={12} size={1} />
		</div>
	);
};
