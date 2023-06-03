import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import {API} from './states/API'

import { setupListeners } from '@reduxjs/toolkit/query'
export const store = configureStore({
  reducer: { [API.reducerPath]: API.reducer },
  middleware: (getDefault) => getDefault().concat(API.middleware),
});
setupListeners(store.dispatch);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <App />
  </Provider>,
)
