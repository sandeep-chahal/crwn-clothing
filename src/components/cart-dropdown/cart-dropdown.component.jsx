import React from 'react';
import {connect} from 'react-redux';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import './cart-dropdown.styles.scss';

const cartDropdown = (props) => {
    console.log(props);
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    props.items.map(item => <CartItem key={item.id} item = {item}/>)
                }
                <CustomButton>CheckOut</CustomButton>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    items: selectCartItems(state)
})

export default connect(mapStateToProps)(cartDropdown);