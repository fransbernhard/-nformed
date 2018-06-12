import { combineReducers } from 'redux'

import posts from './posts'
import vote_id from './vote_id'
import count from './count'

const app = combineReducers({
  posts,
  count
})

export default app
