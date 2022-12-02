import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import {ApiProvider} from '@reduxjs/toolkit/query/react'
import App from './App'
import store from './app/store'
import './index.css'
import { getApiData } from './reducer/apiSlice'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={getApiData}>
        <App />
    </ApiProvider>
    </Provider>
  </React.StrictMode>
)
