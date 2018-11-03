import React, {Component} from 'react';
import {LoginWrapper, Title} from "./Login.style";
import LoginForm from "./components/LoginForm/LoginForm";
import {FooterContainer} from "./components/LoginForm/Loginform.styles";
import FooterButton from "./components/FooterButton/FooterButton";

class LoginScreen extends Component {

    navigateToForgotPassword = () => this.props.navigator.push({
        screen: 'App.ForgotPasswordScreen',
        title: 'Forgot Password',
        animationType: 'slide-horizontal',
    })

    navigateToRegistration = () => this.props.navigator.push({
        screen: 'App.RegistrationScreen',
        title: 'Registration',
        animationType: 'slide-horizontal',
    })

    submitHandle = () => alert('form submitted !')

    render() {
        return (
            <LoginWrapper background="#eee">
                <Title h2>Form</Title>
                <LoginForm handleSubmit={this.submitHandle}/>
                <FooterContainer>
                    <FooterButton
                        title="Registration"
                        onPress={this.navigateToRegistration.bind(this)}
                    />
                    <FooterButton
                        title="Forgot password"
                        onPress={this.navigateToForgotPassword.bind(this)}
                    />
                </FooterContainer>
            </LoginWrapper>
        );
    }
}

export default LoginScreen;