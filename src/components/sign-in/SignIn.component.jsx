import React from 'react';
import './SignIn.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        const {name,value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({email: '',password:''})
    }


    render(){

        return(
            <form onSubmit = {this.handleSubmit} className="sign-in">
                <h2>I Have Already an Account!</h2>
                <p>Sign in with your Email and Password</p>
                <FormInput type="email"
                        name = "email"
                        value = {this.state.email}
                        handleChange = {this.handleChange}
                        label = "Email"
                        required/>
                <FormInput type="password"
                       name = "password"
                        value = {this.state.password}
                        handleChange = {this.handleChange}
                        label = "Password"
                        required/>
                <CustomButton type="submit">Submit</CustomButton>
            </form>
        )
    }
}

export default SignIn;
