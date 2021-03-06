import React from 'react';
import { connect } from 'react-redux';
import { toogleCartHidden } from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss'
import { ReactComponent as ShoppingIcon } from '../../Assets/shopping-bag.svg';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';


const CartIcon = (props) => (
    <div className="cart-icon" onClick={props.toogleCartHidden}>
        <ShoppingIcon className="shopping-icon"  />
        <span className="item-count">{props.itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toogleCartHidden: () => dispatch(toogleCartHidden())
})
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);