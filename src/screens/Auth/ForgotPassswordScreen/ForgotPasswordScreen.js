import React, {Component} from 'react';
import {ForgotWrapper} from "./ForgotPassword.styles";
import ForgotPasswordForm from "./ForgotPasswordForm/ForgotPasswordForm";

class ForgotPasswordScreen extends Component {
    render() {
        return (
            <ForgotWrapper background="#eee">
                <ForgotPasswordForm />
            </ForgotWrapper>
        );
    }
}

export default ForgotPasswordScreen;
