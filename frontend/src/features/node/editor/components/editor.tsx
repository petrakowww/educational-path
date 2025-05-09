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
	MiniMap,
} from 'reactflow';
import 'reactflow/dist/style.css';
import React, { useCallback, useMemo } from 'react';
import { NodeMain } from '../types/node';
import { nodeBuilderRegistry } from '../config/node-templates-config';
import { nodeVisualComponents } from '@/shared/node/components/editor/fabric/node-components';
import { useNodeStore } from '@/shared/managers/store/editor/nodes-editor.store';
import { useEditorAsideStore } from '@/shared/managers/store/editor/editor.store';
import { useDragAndDropStore } from '@/shared/managers/store/editor/dnd-editor.store';
import { createsCycle } from '../utils/edges/creates-cycle';
import { useEdgeStore } from '@/shared/managers/store/editor/edge-editor.store';
import { shallow } from 'zustand/vanilla/shallow';
import {
	defaultEdgeConfig,
	edgeEditorType,
} from '@/shared/edge/config/edge.config';
import { getNodeColorByType } from '../../utils/get-node-color-by-type';
import { CustomConnectionLine } from '@/shared/node/components/editor/line/connection-line';

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

	const { openEditor, closeEditor, setFocusingLabel } = useEditorAsideStore(
		(state) => ({
			openEditor: state.openEditor,
			closeEditor: state.closeEditor,
			setFocusingLabel: state.setFocusingLabel,
			isOpenMenu: state.isOpenMenu,
		}),
		(a, b) => a.isOpenMenu === b.isOpenMenu
	);

	const type = useDragAndDropStore(
		(state) => state.type,
		(a, b) => a === b
	);

	const onDragOver = useCallback((event: React.DragEvent) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = 'move';
	}, []);

	const onDrop = useCallback(
		(event: React.DragEvent) => {
			event.preventDefault();

			if (!type) {
				return;
			}

			const position = screenToFlowPosition({
				x: event.clientX,
				y: event.clientY,
			});

			const nodeBuilderFunction = nodeBuilderRegistry[type];
			const newNode = nodeBuilderFunction()
				.withPosition(position.x, position.y)
				.build();

			setNodes([...nodesList, newNode]);
		},
		[screenToFlowPosition, setNodes, type, nodesList]
	);

	const handleFlowEditorOnClick = useCallback(() => {
		setNode(null);
		clearSelectedEdge();
		closeEditor();
	}, [setNode, clearSelectedEdge, closeEditor]);

	const handleNodeDoubleClick = useCallback(
		(e: React.MouseEvent, node: Node<NodeMain>) => {
			e.stopPropagation();
			if (node.data.title && node.data.canShowLabel) {
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
		[selectedNodeId, setNode, clearSelectedEdge, openEditor]
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
	// удаление нельзя выполнить через клавиатуру, учитывать это (исправить)
	const handleNodesChange = useCallback(
		(changes: NodeChange[]) => {
			// const filtered = changes.filter((change) => {
			// 	if (change.type === 'remove') return true;
			// 	if (change.type === 'select') return false;
			// 	if (change.type === 'position' && !change.dragging) {
			// 		return false;
			// 	}
			// 	return true;
			// });

			// if (filtered.length === 0) return;
			// console.log(updatedNodes);
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
					...defaultEdgeConfig,
				},
				edges
			);
			console.log(newEdges);
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
				edgeTypes={edgeEditorType}
				onClick={handleFlowEditorOnClick}
				onNodeDoubleClick={handleNodeDoubleClick}
				onNodeClick={handleNodeClick}
				onEdgeClick={handleEdgeClick}
				onNodeDrag={handleNodeDrag}
				onDrop={onDrop}
				onDragOver={onDragOver}
				onConnect={onConnect}
				minZoom={0.2}
				connectionLineComponent={CustomConnectionLine}
				deleteKeyCode={null}
			>
				<Controls position="top-right" />
				<Background
					variant={BackgroundVariant.Dots}
					gap={12}
					size={1}
				/>
				<MiniMap
					pannable
					zoomable
					style={{ height: 150, width: 300 }}
					nodeColor={(n) => getNodeColorByType(n.type)}
					nodeBorderRadius={4}
				/>
			</ReactFlow>
		</div>
	);
};
