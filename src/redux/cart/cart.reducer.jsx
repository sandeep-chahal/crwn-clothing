import Actiontypes from './cart.types';
import { addItemToCart } from './cart.util';

const INITIAL_STATE = {
    hidden: true,
    items: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case Actiontypes.TOOGLE_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
        case Actiontypes.ADD_ITEM:
            return{
                ...state,
                items: addItemToCart(state.items,action.payload)
            }
        default:
            return state
    }
}


export default cartReducer;