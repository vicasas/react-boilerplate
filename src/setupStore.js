import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

export default function setupStore() {
  let composeEnhancers = compose

  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    /* eslint-disable no-underscore-dangle */
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})

    // NOTE: Uncomment the code below to restore support for Redux Saga
    // Dev Tools once it supports redux-saga version 1.x.x
    // if (window.__SAGA_MONITOR_EXTENSION__)
    //   reduxSagaMonitorOptions = {
    //     sagaMonitor: window.__SAGA_MONITOR_EXTENSION__,
    //   };
    /* eslint-enable */
  }

  const initialState = {}
  const middlewares = [thunk]
  const enhancers = [applyMiddleware(...middlewares)]
  const store = createStore(rootReducer, initialState, composeEnhancers(...enhancers))

  // store.injectedReducers = {}

  // if (module.hot) {
  //   module.hot.accept('./reducers', () => {
  //     store.replaceReducer(rootReducer(store.injectedReducers))
  //   })
  // }

  return store
}
