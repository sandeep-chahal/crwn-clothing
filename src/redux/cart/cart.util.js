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