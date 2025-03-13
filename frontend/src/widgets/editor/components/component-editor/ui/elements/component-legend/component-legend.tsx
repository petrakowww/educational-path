import {
	GraphNodeLegendItem,
	GraphNodeLegendProps,
	LegendIconEnum,
} from '@/shared/lib/node/component';
import { Input, Button } from '@/shared/ui';
import { PaintBucketIcon, TrashIcon } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Node } from 'reactflow';
import { GraphNodeComponent } from '@/shared/lib/node/component';
import { GraphNodeLegendEditor } from '@/shared/lib/node/editor';
import {
	setSelectedLegend,
	useAppDispatch,
	useAppSelector,
} from '@/shared/managers';
interface ComponentEditorLegendProps {
	editedNode: Node<GraphNodeComponent<GraphNodeLegendProps>>;
}

export const ComponentLegend = (props: ComponentEditorLegendProps) => {
	const { editedNode } = props;

	const [legends, setLegends] = useState<GraphNodeLegendItem[]>(
		editedNode.data.dataTProps.legendProps.legendItems
	);

	const dispatch = useAppDispatch();

	const focusedLegendId = useAppSelector(
		(state) => state.aside_editor.selectedLegendId
	);

	const clearSelectedLegend = useCallback(() => {
		dispatch(setSelectedLegend(null));
	}, [dispatch]);

	const handleUpdateNode = (
		nodeId: string,
		updateLegends: GraphNodeLegendItem[]
	) => {
		GraphNodeLegendEditor.updateLegendItemsArray(updateLegends);
		setLegends(updateLegends);
	};

	const addLegend = () => {
		const newLegend = {
			idItem: crypto.randomUUID(),
			color: LegendIconEnum.baseColor,
			label: '',
		};
		handleUpdateNode(editedNode.id, [...legends, newLegend]);
	};

	const updateLegend = (
		id: string,
		newData: Partial<GraphNodeLegendItem>
	) => {
		const updatedLegends = legends.map((legend) =>
			legend.idItem === id ? { ...legend, ...newData } : legend
		);
		handleUpdateNode(editedNode.id, updatedLegends);
		GraphNodeLegendEditor.updateOrDeleteLegendSubdcribed(
			updatedLegends,
			id
		);
	};

	const removeLegend = (id: string) => {
		const filteredLegends = legends.filter(
			(legend) => legend.idItem !== id
		);
		handleUpdateNode(editedNode.id, filteredLegends);
		GraphNodeLegendEditor.updateOrDeleteLegendSubdcribed(
			filteredLegends,
			id,
			true
		);
	};

	useEffect(() => {
		setLegends(GraphNodeLegendEditor.getLegendItemsArray());
	}, [editedNode]);

	return (
		<div className="flex flex-col gap-2">
			<span className="text-foreground/80 text-sm font-medium">
				Legends
			</span>

			<div className="flex flex-col gap-3">
				{legends.length > 0 ? (
					legends.map((legend) => (
						<LegendItemRow
							key={legend.idItem}
							focusedLegendId={focusedLegendId}
							legend={legend}
							onUpdate={updateLegend}
							onRemove={removeLegend}
							onFocusClear={clearSelectedLegend}
						/>
					))
				) : (
					<span className="text-sm text-foreground/80">
						So far, there are no established groups
					</span>
				)}
			</div>

			<Button
				onClick={addLegend}
				className="text-sm px-3 py-1 border rounded-md"
				variant={'outline'}
			>
				Add Legend
			</Button>
		</div>
	);
};

interface LegendItemRowProps {
	legend: GraphNodeLegendItem;
	focusedLegendId: string | null;
	onUpdate: (id: string, newData: Partial<GraphNodeLegendItem>) => void;
	onRemove: (id: string) => void;
	onFocusClear: () => void;
}

const LegendItemRow = (props: LegendItemRowProps) => {
	const { legend, focusedLegendId, onUpdate, onRemove, onFocusClear } = props;
	const colorPickerRef = useRef<HTMLInputElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (legend.idItem === focusedLegendId) {
			inputRef.current?.focus();
			inputRef.current?.select();
			onFocusClear();
		}
	}, [focusedLegendId, legend.idItem, onFocusClear]);

	return (
		<div className="flex items-center gap-2 relative">
			<input
				ref={colorPickerRef}
				type="color"
				className="invisible absolute"
				value={legend.color}
				onChange={(e) =>
					onUpdate(legend.idItem, { color: e.target.value })
				}
			/>
			<Button
				onClick={() => colorPickerRef.current?.click()}
				className="w-6 h-6 p-0 flex aspect-square items-center justify-center border rounded-md"
				style={{ backgroundColor: legend.color }}
			>
				<PaintBucketIcon className="w-4 h-4 text-white" />
			</Button>

			<Input
				className="h-6 px-1.5 text-sm w-full"
				type="text"
				placeholder="Legend label"
				value={legend.label}
				ref={inputRef}
				onChange={(e) =>
					onUpdate(legend.idItem, { label: e.target.value })
				}
			/>

			<Button
				onClick={() => onRemove(legend.idItem)}
				className="w-6 h-6 p-0 aspect-square flex items-center justify-center"
				variant={'destructive'}
			>
				<TrashIcon className="w-4 h-4" />
			</Button>
		</div>
	);
};
