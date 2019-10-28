import React from 'react';
import { connect } from 'react-redux';
import { toogleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../Assets/shopping-bag.svg';

const CartIcon = (props) => (
    <div className="cart-icon" onClick={props.toogleCartHidden}>
        <ShoppingIcon className="shopping-icon"  />
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toogleCartHidden: () => dispatch(toogleCartHidden())
})

export default connect(null,mapDispatchToProps)(CartIcon);