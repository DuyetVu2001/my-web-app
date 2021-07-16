import { INIT_STATE } from '../../constant';
import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
	name: 'navRight',
	initialState: INIT_STATE.navRight,
	reducers: {
		showNavRight: (state) => (state = true),
		hideNavRight: (state) => (state = false),
	},
});

export const { showNavRight, hideNavRight } = slice.actions;

export const selectorNavRight = (state) => state.navRight;

export default slice.reducer;
