import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toogleCartHidden } from '../../redux/cart/cart.actions';
import './cart-dropdown.styles.scss';
import { createStructuredSelector } from 'reselect';


const cartDropdown = (props) => {
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {   props.items.length ?
                            props.items.map(item => <CartItem key={item.id} item = {item}/>)
                            : <span className="empty-message">Your Cart is Empty</span>
                }
            </div>
                <CustomButton onClick={() => {
                    props.history.push('/checout');
                    props.dispatch(toogleCartHidden())
                }}>CheckOut</CustomButton>
        </div>
    )
}

const mapStateToProps =createStructuredSelector({
    items: selectCartItems
})

export default withRouter(connect(mapStateToProps)(cartDropdown));