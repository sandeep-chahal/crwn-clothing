import Actiontypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.util';
import ActionTypes from './cart.types';

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
        case Actiontypes.REMOVE_ITEM:
                return{
                    ...state,
                    items: removeItemFromCart(state.items,action.payload)
                }
        case ActionTypes.CLEAR_CART_ITEM:
            return{
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            }
        case ActionTypes.EMPTY_CART:
            return{
                ...state,
                items: []
            }
        default:
            return state
    }
}


export default cartReducer;