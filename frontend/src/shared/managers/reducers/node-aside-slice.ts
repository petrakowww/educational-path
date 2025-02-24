import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialAsideState } from '../initial/aside-initial';

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
