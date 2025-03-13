import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface EditorInterface {
	isOpenMenu: boolean;
	isFocusingOnLabel: boolean;
	selectedLegendId: string | null;
	selectedTodoId: string | null;
}


export const initialAsideState: EditorInterface = {
	isOpenMenu: false,
	isFocusingOnLabel: false,
	selectedLegendId: null,
	selectedTodoId: null,
};


export const nodeAsideSlice = createSlice({
	name: 'AsideMenuBehaviour',
	initialState: initialAsideState,
	reducers: {
		setEditorStatusMenu: (state, action: PayloadAction<boolean>) => {
			state.isOpenMenu = action.payload;
		},
		setFocusingLabel: (state, action: PayloadAction<boolean>) => {
			state.isFocusingOnLabel = action.payload;
		},
		setSelectedLegend: (state, action: PayloadAction<string | null>) => {
			state.selectedLegendId = action.payload;
		},
		setSelectedTodo: (state, action: PayloadAction<string | null>) => {
			state.selectedTodoId = action.payload;
		},
	},
});

export const {
	setEditorStatusMenu,
	setFocusingLabel,
	setSelectedLegend,
	setSelectedTodo,
} = nodeAsideSlice.actions;
export const nodeEditorAsideReducer = nodeAsideSlice.reducer;
