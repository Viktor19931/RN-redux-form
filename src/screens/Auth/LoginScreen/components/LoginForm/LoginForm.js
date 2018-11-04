import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {ErrorContainer, ErrorRow} from "./Loginform.styles";
import {FormContainer} from "../../Login.styles";
import When from "../../../../../components/When/When";
import {Button} from "../../../components/Button/Button";
import {isValidEmail, isYahooMail, minLength6, required} from '../../../../../utility/form/validation'
import submit from "./submit";
import renderField from "../../../components/RenderField/renderField";

class LoginComponent extends Component {
    render() {
        const {navigate, handleSubmit, error, valid, submitting, asyncValidating, reset } = this.props

        // console.log(this.props);

        return (
            <FormContainer>
                <Field
                    keyboardType="email-address"
                    label="Email: "
                    component={renderField}
                    name="email"
                    validate={[required, isValidEmail]}
                    warn={isYahooMail}
                />
                <Field
                    keyboardType="default"
                    password
                    label="Password: "
                    component={renderField}
                    name="password"
                    validate={[required, minLength6]}
                />
                <ErrorContainer>
                    <When is={!!error}>
                        <ErrorRow>{error}</ErrorRow>
                    </When>
                </ErrorContainer>
                <Button
                    title="Login"
                    bg="steelblue"
                    onPress={handleSubmit(values => submit(values, navigate, reset))}
                    showIndicator={submitting}
                    asyncValidation={!!asyncValidating}
                    disabled={!valid || submitting}
                />
            </FormContainer>
        )
    }
}

const LoginForm = reduxForm({
    form: 'login', // a unique identifier for this form
})(LoginComponent);

export default LoginForm
