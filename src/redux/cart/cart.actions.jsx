import ActionTypes from './cart.types';

export const toogleCartHidden = () => ({
    type: ActionTypes.TOOGLE_HIDDEN
})

export const AddItem = (item) => ({
    type: ActionTypes.ADD_ITEM,
    payload: item
})

export const clearCartItem = item =>({
    type: ActionTypes.CLEAR_CART_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: ActionTypes.REMOVE_ITEM,
    payload: item
})

export const emptyCart = () => ({
    type: ActionTypes.EMPTY_CART
})