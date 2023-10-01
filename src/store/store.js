import { configureStore } from '@reduxjs/toolkit'
import { autchSlice } from './auth'
import { journalSlice } from './journal'

export const store = configureStore({
  reducer: {
    auth: autchSlice.reducer,
    journal: journalSlice.reducer,
  },
})