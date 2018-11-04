import React, {Component} from 'react';
import {RegisterWrapper} from "./Registration.styles";
import RegistrationForm from "./RegistrationForm/RegistrationForm";

class RegistrationScreen extends Component {

    navigateToHome = () =>
        this.props.navigator.push({
            screen: 'App.HomeScreen',
            title: 'Home',
            animationType: 'slide-horizontal',
        })

    render() {
        return (
            <RegisterWrapper background="#eee">
                <RegistrationForm navigate={this.navigateToHome.bind(this)}/>
            </RegisterWrapper>
        );
    }
}

export default RegistrationScreen;
