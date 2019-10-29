import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children,inverted,...otherProps}) => (
    <button className = {`custom-button ${otherProps.inverted ? 'inverted' : ''}`} {...otherProps}>{children}</button>
)

export default CustomButton;