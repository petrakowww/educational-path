import { create } from 'zustand';

interface EditorInterface {
  isOpenMenu: boolean;
  isFocusingOnLabel: boolean;
  selectedLegendId: string | null;
  selectedTodoId: string | null;

  setEditorStatusMenu: (isOpen: boolean) => void;
  setFocusingLabel: (isFocusing: boolean) => void;
  setSelectedTodo: (todoId: string | null) => void;
}

export const useEditorAsideStore = create<EditorInterface>((set) => ({
  isOpenMenu: false,
  isFocusingOnLabel: false,
  selectedLegendId: null,
  selectedTodoId: null,

  setEditorStatusMenu: (isOpen) => set({ isOpenMenu: isOpen }),
  setFocusingLabel: (isFocusing) => set({ isFocusingOnLabel: isFocusing }),
  setSelectedTodo: (todoId) => set({ selectedTodoId: todoId }),
}));
