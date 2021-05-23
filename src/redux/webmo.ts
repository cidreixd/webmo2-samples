import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import webmo from 'webmo2-js'

export interface WebmoState {
  isInitialized: boolean
  host: string
  ping: {
    state: 'OK' | 'NG' | 'Pending'
    indicator: 'online' | 'offline' | 'n/a'
    time: number
  }
  websocket: {
    state: 'Open' | 'Close'
    indicator: 'online' | 'offline'
  }
}

export const webmoInitialState: WebmoState = {
  isInitialized: false,
  host: 'webmo.local',
  ping: {
    state: 'NG',
    indicator: 'offline',
    time: 0,
  },
  websocket: {
    state: 'Close',
    indicator: 'offline',
  },
}

export const counterSlice = createSlice({
  name: 'webmo',
  initialState: webmoInitialState,
  reducers: {
    init: (state) => {
      webmo.init({ host: state.host })
      state.isInitialized = true
    },
    setHost: (state, action: PayloadAction<string>) => {
      state.isInitialized = false
      state.host = action.payload
    },
    pingPending: (state, action: PayloadAction<number>) => {
      state.ping.state = 'Pending'
      state.ping.indicator = 'n/a'
      state.ping.time = action.payload
    },
    pingOK: (state, action: PayloadAction<number>) => {
      if (state.ping.time !== action.payload) return
      state.ping.state = 'OK'
      state.ping.indicator = 'online'
    },
    pingNG: (state, action: PayloadAction<number>) => {
      if (state.ping.time !== action.payload) return
      state.ping.state = 'NG'
      state.ping.indicator = 'offline'
    },
    websocketIsOpen: (state) => {
      state.websocket.state = 'Open'
      state.websocket.indicator = 'online'
    },
    websocketIsClose: (state) => {
      state.websocket.state = 'Close'
      state.websocket.indicator = 'offline'
    },
  },
})

export const actions = counterSlice.actions
export const reducer = counterSlice.reducer
