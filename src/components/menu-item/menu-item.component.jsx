import React from 'react';
import './menu-item.style.scss';


const MenuItem = (props) => (
    <div className= {`menu-item ${props.size ? props.size : null}`}>
        <div className="background-img" style = {{backgroundImage: `url(${props.image})`}}/>
        <div className="content">
            <h1 className="title">{props.title.toUpperCase()}</h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
)

export default MenuItem;