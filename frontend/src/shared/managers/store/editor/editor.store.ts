import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

export type EditorType = 'node' | 'edge' | null;

interface EditorInterface {
	isOpenMenu: boolean;
	isFocusingOnLabel: boolean;
	selectedLegendId: string | null;
	selectedTodoId: string | null;
	selectedEditorType: EditorType;

	setEditorStatusMenu: (isOpen: boolean) => void;
	setFocusingLabel: (isFocusing: boolean) => void;
	setSelectedTodo: (todoId: string | null) => void;
	setSelectedEditorType: (type: EditorType) => void;
	openEditor: (type: NonNullable<EditorType>) => void;
	closeEditor: () => void;
}

export const useEditorAsideStore = createWithEqualityFn<EditorInterface>(
	(set) => ({
		isOpenMenu: false,
		isFocusingOnLabel: false,
		selectedLegendId: null,
		selectedTodoId: null,
		selectedEditorType: null,

		setEditorStatusMenu: (isOpen) => set({ isOpenMenu: isOpen }),
		setFocusingLabel: (isFocusing) =>
			set({ isFocusingOnLabel: isFocusing }),
		setSelectedTodo: (todoId) => set({ selectedTodoId: todoId }),
		setSelectedEditorType: (type) => set({ selectedEditorType: type }),

		openEditor: (type: NonNullable<EditorType>) =>
			set({ isOpenMenu: true, selectedEditorType: type }),

		closeEditor: () => set({ isOpenMenu: false, selectedEditorType: null }),
	}),
	shallow
);
