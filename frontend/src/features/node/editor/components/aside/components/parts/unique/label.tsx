import { Input, Label } from '@/shared/ui';
import { Node } from 'reactflow';
import { useEffect, useRef, useState } from 'react';
import { NodeMain } from '@/features/node/editor/types/node';
import { useEditorAsideStore } from '@/shared/managers/store/editor.store';
import { shallow } from 'zustand/shallow';
import { WithTitleCommand } from '@/features/node/editor/utils/command/commands-impl';

interface ComponentEditorLabelProps {
	node: Node<NodeMain>;
}

export const LabelEditorPart = (props: ComponentEditorLabelProps) => {
	const { node } = props;
	const inputRef = useRef<HTMLInputElement>(null);

	const { isFocusingOnLabel, setFocusingLabel } = useEditorAsideStore(
		(state) => ({
			isFocusingOnLabel: state.isFocusingOnLabel,
			setFocusingLabel: state.setFocusingLabel,
		}),
		shallow
	);

	const [label, setLabel] = useState<string>();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		setLabel(newValue);

		const command = new WithTitleCommand(node.id, newValue);
		command.execute();
	};

	useEffect(() => {
		setLabel(node.data.title ?? '');
	}, [node]);

	useEffect(() => {
		if (isFocusingOnLabel && inputRef.current && node.data.canShowLabel) {
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
				value={label ?? ''}
				onChange={handleChange}
			/>
		</div>
	);
};
