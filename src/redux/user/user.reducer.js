import { actiontypes } from './user.actionTypes';

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actiontypes.setCurrentUser:
            return{
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}

export default userReducer;