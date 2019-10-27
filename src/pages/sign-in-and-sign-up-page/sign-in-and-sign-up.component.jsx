import React from 'react';
import './sign-in-and-sign-up.styles.scss';

import SignIn from '../../components/sign-in/SignIn.component';
import SignUp from '../../components/sign-up/sign-up.component';


const SignInAndSignOut = props => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignOut;