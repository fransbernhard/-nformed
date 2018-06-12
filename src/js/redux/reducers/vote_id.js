import { SET_VOTE_ID } from "../action-types/index"
import store from "../store/index"

const vote_id = (state, action) => {
    switch (action.type) {
        case SET_VOTE_ID:
            return {
                vote: state.vote
            }
    }
    return state
}

export default vote_id