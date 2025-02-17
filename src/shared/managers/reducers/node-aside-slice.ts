import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialAsideState } from '../initial/aside-initial';


export const nodeAsideSlice = createSlice({
	name: 'AsideMenuBehaviour',
	initialState: initialAsideState,
	reducers: {
		setEditorStatusMenu: (state, action: PayloadAction<boolean>) => {
			state.isOpenMenu = action.payload;
		},
	},
});

export const {
	setEditorStatusMenu,
} = nodeAsideSlice.actions;
export const nodeEditorAsideReducer = nodeAsideSlice.reducer;
