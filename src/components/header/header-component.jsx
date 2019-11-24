import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../Assets/crown.svg';
import {auth} from '../../firebase/firebase.util';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectUser} from '../../redux/user/user.selectors';
import { selectHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';


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
            <CartIcon />    
            
        </div>
       {
           !props.hidden ? <CartDropdown />
                        : null
       }
    </div>
)

const mapStateToProps = createStructuredSelector({
    isAuth: selectUser,
    hidden: selectHidden
})

export default connect(mapStateToProps)(Header);