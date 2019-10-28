import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const cartDropdown = (props) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            <CustomButton>CheckOut</CustomButton>
        </div>
    </div>
)


export default cartDropdown;