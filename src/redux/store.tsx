import { configureStore } from '@reduxjs/toolkit'

import timerReducer from './reducers/timerReducer'
import characterMenuOptionsReducer from './reducers/characterMenuOptionsReducer'

export const store = configureStore({
  reducer: {
    timer: timerReducer,
    characterMenu: characterMenuOptionsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
