
import { createSlice } from '@reduxjs/toolkit'

export const macOrientationSlice = createSlice({
	name: 'macOrientation',
	initialState: {
		value: 0
	},
	reducers: {
		setToInfoPage: state => {
			state.value = 0
		},
		setToProjPage: state => {
			state.value = 1
		},
		setToSkillsPage: state => {
			state.value = 2
		},

	}
})

// Action creators are generated for each case reducer function
export const { setToProjPage, setToInfoPage , setToSkillsPage} = macOrientationSlice.actions

export default macOrientationSlice.reducer






