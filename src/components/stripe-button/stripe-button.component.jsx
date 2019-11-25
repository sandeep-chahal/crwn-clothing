import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

import {connect} from 'react-redux';
import {emptyCart} from '../../redux/cart/cart.actions'; 



const StripeCheckoutButton = ({price,emptyCartItems}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_3mSrZlAkYg6DkXXeezpIjZ7J007aFcZ2JS';

    const onToken = (token) => {
        emptyCartItems()
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            lebel="Buy Now!"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            price={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

const mapDispatchToProps = dispatch => ({
    emptyCartItems: () => dispatch(emptyCart())
})


export default connect(null,mapDispatchToProps)(StripeCheckoutButton);