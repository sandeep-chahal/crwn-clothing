import { actiontypes } from './user.actionTypes';

export const setCurrentUser = user => {
    return{
        type: actiontypes.setCurrentUser,
        payload: user
    }
}