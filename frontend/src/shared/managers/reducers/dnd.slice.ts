import { NodeLabelEnum } from '@/shared/lib/node/component';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DnDState {
	type: NodeLabelEnum | null;
}

export const dndInitialState: DnDState = {
	type: null,
};


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
