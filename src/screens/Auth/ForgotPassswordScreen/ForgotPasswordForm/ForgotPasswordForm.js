import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import renderField from "../../components/RenderField/renderField";
import {isValidEmail, isYahooMail, required} from "../../../../utility/form/validation";
import {Field, reduxForm} from "redux-form";
import {Button} from "../../components/Button/Button";
import submit from "../../LoginScreen/components/LoginForm/submit";

class ForgotPasswordForm extends Component {

    render() {
        const {navigate, handleSubmit, error, valid, submitting, asyncValidating, reset } = this.props

        return (
            <>
                <Field
                    keyboardType="email-address"
                    label="Email: "
                    component={renderField}
                    name="email"
                    validate={[required, isValidEmail]}
                    warn={isYahooMail}
                />
                <Button
                    title="Send"
                    bg="steelblue"
                    onPress={() => alert('check your email !')}
                    showIndicator={submitting}
                    asyncValidation={!!asyncValidating}
                    disabled={!valid || submitting}
                />
            </>
        );
    }
}

const toReduxForm = reduxForm({
    form: 'registration', // a unique identifier for this form
})(ForgotPasswordForm);

export default toReduxForm;
