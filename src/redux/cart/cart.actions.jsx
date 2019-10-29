import ActionTypes from './cart.types';

export const toogleCartHidden = () => ({
    type: ActionTypes.TOOGLE_HIDDEN
})

export const AddItem = (item) => ({
    type: ActionTypes.ADD_ITEM,
    payload: item
})