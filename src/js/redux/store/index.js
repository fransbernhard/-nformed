import { createStore, applyMiddleware, compose } from 'redux'
import reducer from "../reducers/index"
import { createLogger } from "redux-logger"

const initialState = {}
const enhancers = []
const logger = createLogger()
const middleware = [
  logger
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  reducer,
  initialState,
  composedEnhancers
)

export default store
