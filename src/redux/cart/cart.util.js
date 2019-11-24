export const addItemToCart = (CartItems, itemToAdd) => {
    const existingCartItem = CartItems.find(item => item.id === itemToAdd.id);

    if(existingCartItem){
        return  CartItems.map(cartItem => cartItem.id === itemToAdd.id ? 
                                    {...cartItem, quantity: cartItem.quantity+1}
                                    : cartItem)
    } 

    return[
        ...CartItems,
        {...itemToAdd, quantity: 1}
    ]
}


export const removeItemFromCart = (CartItems, itemToRemove) => {
    const existingCartItem = CartItems.find(item => item.id === itemToRemove.id);



    if(existingCartItem.quantity === 1){
        return CartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
    }


    return  CartItems.map(cartItem => cartItem.id === itemToRemove.id ? 
                                {...cartItem, quantity: cartItem.quantity-1}
                                : cartItem)
}