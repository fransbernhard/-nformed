import store from "../store/index"

var timesChanged = 1

const count = (state = {amount: 0, timesChanged: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            var newObject = {
                amount: state.amount + 1,
                timesChanged: timesChanged++ 
            }
            return newObject
        case 'DECREASE':
        var newObject = {
            amount: state.amount - 1,
            timesChanged: timesChanged++ 
        }
        return newObject
        default:
            return state
    }
    return state
}


export default count

