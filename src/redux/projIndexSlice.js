
import { createSlice } from '@reduxjs/toolkit'

export const projIndexSlice = createSlice({
	name: 'projectIndex',
	initialState: {
		value: 0
	},
	reducers: {
		increment: state => {
			state.value = ((state.value + 1) % 4)
		},
		decrement: state => {
			state.value = ((state.value - 1 % 4) + 4) % 4;
		},

	}
})

// Action creators are generated for each case reducer function
export const { increment, decrement} = projIndexSlice.actions

export default projIndexSlice.reducer






