import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header-component";
import SignInAndSignOut from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";

class App extends React.Component {
  state = {
    user: null
  };

  unsubscribe = null;
  componentWillUnmount() {
    this.unsubscribe();
  }

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged( async (userAuth) => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            user: {
              id: snapShot.id,
            ...snapShot.data()
            }
          })
        })

      }
      else{
        this.setState({
          user: userAuth
        })
      }
    });
  }

  render() {
    return (
      <div>
        <Header isAuth={this.state.user !== null} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInAndSignOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
