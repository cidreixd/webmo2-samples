import { configureStore } from '@reduxjs/toolkit'
import { reducer as webmo, WebmoState } from './webmo'

export interface AppState {
    webmo: WebmoState
}

export const store = configureStore({
  reducer: {
    webmo,
  },
})
