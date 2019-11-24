import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header-component";
import SignInAndSignOut from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component";
import checkout from './pages/checkout/checkout.component';

import { auth, createUserProfileDocument } from "./firebase/firebase.util";
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  

  unsubscribe = null;
  componentWillUnmount() {
    this.unsubscribe();
  }

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged( async (userAuth) => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            user: {
              id: snapShot.id,
            ...snapShot.data()
            }
          })
        })

      }
      else{
        this.props.setCurrentUser(userAuth)
      }
    });
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/signin" render = {() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignOut />)} />
          <Route exact path="/checout" component={checkout} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
