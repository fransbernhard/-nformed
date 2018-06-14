import { combineReducers } from 'redux'

import posts from './posts'
import vote_id from './vote_id'
import weather from './weather'

const app = combineReducers({
  posts,
  vote_id,
  weather
})

export default app
