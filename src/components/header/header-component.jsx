import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../Assets/crown.svg';
import {auth} from '../../firebase/firebase.util';

// isAuth is equvalent to currentUser in React course

const Header = (props) =>(
    <div className="header">
       <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link> 
        <div className="options">
            <Link to="/shop" className="option">Shop</Link>
            <Link to="/contact" className="option">Contact</Link>
            {
            props.isAuth ? <div className="option" onClick = {() => auth.signOut()}>Sign Out</div> 
                         : <Link to="/signin" className="option">Sign In</Link>
            }
            
        </div>
    </div>
)

export default Header;