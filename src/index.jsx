import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import { Router } from 'react-router-dom'
import { Provider as ProviderRedux } from 'react-redux'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import setupStore from './setupStore'
import history from './utils/history.util'

const store = setupStore()

ReactDOM.render(
  <ProviderRedux store={store}>
    <Router history={history}>
      <App />
    </Router>
  </ProviderRedux>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
