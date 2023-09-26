import { configureStore } from '@reduxjs/toolkit'
import { autchSlice } from './auth'

export const store = configureStore({
  reducer: {
    auth: autchSlice.reducer,
  },
})