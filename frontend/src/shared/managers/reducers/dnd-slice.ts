import { NodeLabelEnum } from '@/shared/lib/node/component';
import { dndInitialState } from '../initial/dnd-initial';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const dndSlice = createSlice({
	name: 'dnd',
	initialState: dndInitialState,
	reducers: {
		setType: (state, action: PayloadAction<NodeLabelEnum | null>) => {
			state.type = action.payload;
		},
		resetType: (state) => {
			state.type = null;
		},
	},
});

export const { setType, resetType } = dndSlice.actions;
export const dndEditorReduser = dndSlice.reducer;
