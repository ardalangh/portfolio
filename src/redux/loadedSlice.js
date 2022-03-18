
import { createSlice } from '@reduxjs/toolkit'

export const loadedSlice = createSlice({
	name: 'macOrientation',
	initialState: {
		value: false
	},
	reducers: {
		setToLoaded: state => {
			state.value = true
		},
	}
})

// Action creators are generated for each case reducer function
export const {setToLoaded } = loadedSlice.actions

export default loadedSlice.reducer






