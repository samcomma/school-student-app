import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './components/App'

const root = document.querySelector('#root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)
