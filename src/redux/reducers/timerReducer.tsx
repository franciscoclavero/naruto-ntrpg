import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'timer',
  initialState: {
    width: '',
    labelText: '',
    time: 0,
    initialPosition: 10,
  },
  reducers: {
    setWidth: (state, action) => {
      state.width = action.payload
    },
    setLabelText: (state, action) => {
      state.labelText = action.payload
    },
    setTime: (state, action) => {
      state.time = action.payload
    },
    setInitialPosition: (state, action) => {
      state.initialPosition = action.payload
    },
  },
})

export const { setWidth, setLabelText, setTime, setInitialPosition } = slice.actions
export default slice.reducer
