import React from 'react';
import { connect } from 'react-redux';

import { clearCartItem, removeItem, AddItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const checkoutItem = props => {
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={props.item.imageUrl} alt={props.item.name+" image"} />
            </div>
            <span className="name">{props.item.name}</span>
            <span className="quantity">
            <div className="arrow" onClick={() => props.removeItem(props.item)}>&#10094;</div>
            {props.item.quantity}
            <div className="arrow" onClick={() => props.addItem(props.item)}>&#10095;</div>
            </span>
            <span className="price">{props.item.price}</span>
            <div className="remove-button" onClick={() => props.clearCartItem(props.item)} >&#10005;</div>
        </div>
    )
}
 
const mapDispatchToProps = dispatch => ({
    clearCartItem: (item) => dispatch(clearCartItem(item)),
    addItem: (item) => dispatch(AddItem(item)),
    removeItem: (item) => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(checkoutItem);  