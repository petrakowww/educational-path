import { Input, Label } from '@/shared/ui';
import { Node } from 'reactflow';
import { useEffect, useRef, useState } from 'react';
import { NodeDataShape } from '@/features/node/editor/types/node';
import { useEditorAsideStore } from '@/shared/managers/store/editor.store';
import { useNodeStore } from '@/shared/managers/store/nodes.store';
import { nodeGetter } from '@/features/node/editor/utils/node-properties';

interface ComponentEditorLabelProps {
	node: Node<NodeDataShape>;
}

export const LabelEditorPart = (props: ComponentEditorLabelProps) => {
	const { node } = props;
	const inputRef = useRef<HTMLInputElement>(null);
	const { isFocusingOnLabel, setFocusingLabel } = useEditorAsideStore();

	const updateNodeProperties = useNodeStore(
		(state) => state.updateNodeProperties,
		(a, b) => a === b
	);

	const [label, setLabel] = useState(node.data.labelProps?.label || '');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		setLabel(newValue);
		const updatedProperties = {
			data: {
				labelProps: {
					label: e.target.value,
				},
			},
		};

		updateNodeProperties({
			nodeId: node.id,
			properties: updatedProperties,
		});
	};

	useEffect(() => {
		setLabel(nodeGetter.getLabel(node) ?? '');
	}, [node]);

	useEffect(() => {
		if (isFocusingOnLabel && inputRef.current) {
			inputRef.current.focus();
			inputRef.current.select();
			setFocusingLabel(false);
		}
	}, [isFocusingOnLabel, node, setFocusingLabel]);

	return (
		<div className="flex flex-col gap-2">
			<Label htmlFor="label" className="text-foreground/80">
				Наименование
			</Label>
			<Input
				ref={inputRef}
				id="label"
				type="text"
				placeholder="Введите название"
				className="py-1 h-fit text-sm"
				value={label}
				onChange={handleChange}
			/>
		</div>
	);
};
