import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import StripeChecoutButton from '../../components/stripe-button/stripe-button.component';

import './checkout.styles.scss'


const checkout = props => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Discription</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>

        {
            props.cartItems.map(item => <CheckoutItem key={item.id} item={item}/>)
        }

        <div className="total">TOTAL: ${props.total}</div>
        <StripeChecoutButton price={props.total}/>

        <div className="dummy-credit">
            Use this credit card: - 
            <div>Credit Card - 4242 4242 4242 4242</div>
            <div>Exp - 01/20</div>
            <div>CVV - 123</div>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(checkout);