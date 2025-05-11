import { useMemo, useState } from 'react';
import { Trash2, LocateFixed } from 'lucide-react';
import clsx from 'clsx';
import { useNodeStore } from '@/shared/managers/store/editor/nodes-editor.store';
import { Button, Input } from '@/shared/ui';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { nodeTypeIconRegistry } from './constants';
import { NodeType } from '@/features/node/editor/types/node';
import { shallow } from 'zustand/shallow';
import { useEditorAsideStore } from '@/shared/managers/store/editor/editor.store';
import { getNodesBounds, useReactFlow } from 'reactflow';

export const SearchComponents = () => {
	const [search, setSearch] = useState('');
	const { selectedNodeId, nodes, nodesById, setNode, deleteNode } =
		useNodeStore(
			(state) => ({
				nodes: state.nodesList,
				nodesById: state.nodesById,
				selectedNodeId: state.selectedNodeId,
				setNode: state.setNode,
				deleteNode: state.deleteNode,
			}),
			(a, b) =>
				a.nodes === b.nodes && a.selectedNodeId === b.selectedNodeId
		);

	const { openEditor } = useEditorAsideStore(
		(state) => ({
			openEditor: state.openEditor,
		}),
		shallow
	);

	const { setCenter } = useReactFlow();

	const focusNode = (id: string) => {
		const node = nodesById[id];
		if (node) {
			const { x, y } = node.positionAbsolute ?? node.position;
			const bounds = getNodesBounds([node]);
			const width = bounds.width ?? 0;
			const height = bounds.height ?? 0;

			setCenter(x + width / 2, y + height / 2, {
				zoom: 1.5,
				duration: 300,
			});
		}
	};

	const filteredNodes = useMemo(() => {
		return nodes.filter((node) => {
			const label = node.data?.labelProps?.label ?? '';
			return label.toLowerCase().includes(search.toLowerCase());
		});
	}, [search, nodes]);

	return (
		<aside className="max-w-[300px] absolute z-10 bg-background top-0 left-0 h-full shadow-right p-2 px-3 flex flex-col gap-2">
			<Input
				placeholder="Поиск компонентов..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className="mb-2"
			/>

			<ScrollArea className="max-h-[400px]">
				<div className="flex flex-col gap-2">
					{filteredNodes.map((node) => (
						<div
							key={node.id}
							onClick={() => {
								setNode(node);
								focusNode(node.id);
							}}
							className={clsx(
								'flex flex-row px-2 py-0.5 justify-between rounded-md border border-border bg-background cursor-pointer transition hover:bg-muted/60 group',
								node.id === selectedNodeId && 'bg-primary/30'
							)}
						>
							<div className="break-words flex items-center gap-2">
								{(() => {
									const Icon =
										nodeTypeIconRegistry[
											node.type as NodeType
										];
									return Icon ? (
										<Icon className="w-4 h-4 text-muted-foreground" />
									) : null;
								})()}
								<span
									className="max-w-24 truncate"
									title={node.data?.labelProps?.label}
								>
									{node.data?.labelProps?.label ||
										'Без названия'}
								</span>
							</div>

							<div className="flex gap-1 opacity-0 group-hover:opacity-100 transition">
								<Button
									size="icon"
									variant="ghost"
									onClick={(e) => {
										e.stopPropagation();
										deleteNode(node.id);
									}}
								>
									<Trash2 className="w-4 h-4 text-destructive" />
								</Button>
								<Button
									size="icon"
									variant="ghost"
									onClick={(e) => {
										e.stopPropagation();
										setNode(node);
										focusNode(node.id);
										openEditor('node');
									}}
								>
									<LocateFixed className="w-4 h-4" />
								</Button>
							</div>
						</div>
					))}

					{filteredNodes.length === 0 && (
						<div className="text-muted-foreground text-sm text-center py-6">
							Компоненты не найдены
						</div>
					)}
				</div>
			</ScrollArea>
		</aside>
	);
};
