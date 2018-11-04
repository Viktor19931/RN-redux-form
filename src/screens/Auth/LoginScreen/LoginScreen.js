import React, {Component} from 'react';
import {connect} from "react-redux";
import {LoginWrapper, Title} from "./Login.styles";
import LoginForm from "./components/LoginForm/LoginForm";
import {FooterContainer} from "./components/LoginForm/Loginform.styles";
import FooterButton from "./components/FooterButton/FooterButton";

class LoginScreen extends Component {

    navigateToForgotPassword = () =>
        this.props.navigator.push({
            screen: 'App.ForgotPasswordScreen',
            title: 'Forgot Password',
            animationType: 'slide-horizontal',
        })

    navigateToRegistration = () =>
        this.props.navigator.push({
            screen: 'App.RegistrationScreen',
            title: 'Registration',
            animationType: 'slide-horizontal',
        })

    navigateToHome = () =>
        this.props.navigator.push({
            screen: 'App.HomeScreen',
            title: 'Home',
            animationType: 'slide-horizontal',
        })

    render() {
        return (
            <LoginWrapper background="#eee">
                <Title h2>Form</Title>
                <LoginForm navigate={this.navigateToHome.bind(this)} />
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

const mapStateToProps = state => {
    // console.log(state);
    return {
        form: state.form,
    }
}

export default connect(mapStateToProps, null)(LoginScreen);
