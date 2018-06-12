import { SET_VOTE_ID } from "../action-types/index"
import store from "../store/index"

<<<<<<< HEAD
=======
/*
    Reducer for storing a vote id
*/
>>>>>>> cf63b9ef082ca8d06aa07931a2b359915994cd83
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