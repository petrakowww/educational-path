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
import { useMemo } from 'react';
import { nodeTypes } from '@/widgets/node/container';
import { useAppDispatch } from '@/shared/lib';
import {
	onNodesChange,
	setSelectedNode,
	setNodes,
	setEditorStatusMenu,
	resetNodeSize,
} from '@/shared/managers';
import { GlobalGraphNodeTypesComponents, isValidNodeType } from '@/shared/lib/node/component';
import { useAppSelector } from '@/shared/lib';
import { useEffect } from 'react';
import { createGraphNode } from '@/shared/lib/node/component';
import { NodeLabelEnum } from '@/shared/lib/node/component';

export const FlowEditor = () => {
	const { screenToFlowPosition } = useReactFlow();

	const dispatch = useAppDispatch();
	const nodes = useAppSelector((state) => state.editor.nodes);
	const type = useAppSelector((state) => state.dnd_editor.type);

	const memoizedNodes = useMemo(() => nodes, [nodes]);

	useEffect(() => {
		dispatch(setNodes([createGraphNode(NodeLabelEnum.subtopic)]));
	}, [dispatch]);

	const [edges, setEdges, onEdgesChange] = useEdgesState([]);

	const onDragOver = (event: React.DragEvent) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = 'move';
	};

	const onDrop = (event: React.DragEvent) => {
		event.preventDefault();

		if (!type || !isValidNodeType(type)) {
			return;
		}

		const position = screenToFlowPosition({
			x: event.clientX,
			y: event.clientY,
		});

		const newNode = createGraphNode(type, position);
		dispatch(setNodes([...nodes, newNode]));
	};

	const handleFlowEditorOnClick = () => {
		dispatch(setSelectedNode(null));
		dispatch(setEditorStatusMenu(false));
	};

	const handleNodeClick = (
		e: React.MouseEvent,
		node: Node<GlobalGraphNodeTypesComponents>
	) => {
		e.stopPropagation();
		dispatch(setSelectedNode(node.id));
		dispatch(setEditorStatusMenu(true));
	};

	const handleNodeDrag = (
		e: React.MouseEvent,
		node: Node<GlobalGraphNodeTypesComponents>
	) => {
		dispatch(setSelectedNode(node.id));
	};

	const handleNodesChange = (changes: NodeChange[]) => {
		changes.forEach((change) => {
			if (change.type === 'dimensions') {
				const nodeToUpdate = nodes.find((n) => n.id === change.id);
				if (!nodeToUpdate) return;

				const newWidth = change.dimensions?.width ?? nodeToUpdate.width;
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
	};

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
