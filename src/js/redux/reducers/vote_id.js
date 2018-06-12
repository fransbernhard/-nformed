import { SET_VOTE_ID } from "../action-types/index"
import store from "../store/index"

/*
    Reducer for storing a vote id
*/
const vote_id = (state = {}, action) => {
    switch (action.type) {
        case SET_VOTE_ID:
            return {
                id: action.value
            }
    }
    return state
}

export default vote_id
