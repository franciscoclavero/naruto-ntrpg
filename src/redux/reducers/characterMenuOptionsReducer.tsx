import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'characterMenu',
  initialState: {
    visible: false,
    top: '0px',
    left: '0px',
  },
  reducers: {
    setVisible: (state, action) => {
      state.visible = action.payload
    },
    setTop: (state, action) => {
      state.top = action.payload
    },
    setLeft: (state, action) => {
      state.left = action.payload
    },
  },
})

export const { setVisible, setTop, setLeft } = slice.actions

export default slice.reducer
