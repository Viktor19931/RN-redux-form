import React, {Component} from 'react';
import {minLength4, isYahooMail, required, isValidEmail} from "../../../../utility/form/validation";
import {Field, reduxForm} from "redux-form";
import submit from "../../LoginScreen/components/LoginForm/submit";
import {Button} from "../../components/Button/Button";
import renderField from "../../components/RenderField/renderField";
import {normalizePhoneNumber, normalizeUpper, phoneParser} from "../../../../utility/form/normalize";

class RegistrationForm extends Component {
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
                <Field
                    keyboardType="default"
                    label="User name: "
                    component={renderField}
                    name="username"
                    normalize={normalizeUpper}
                    validate={[required, minLength4]}
                />
                <Field
                    keyboardType="numeric"
                    label="Phone number: "
                    component={renderField}
                    name="mobile"
                    validate={[required]}
                    normalize={normalizePhoneNumber}
                    parse={phoneParser}
                />
                <Field
                    keyboardType="numeric"
                    label="Age: "
                    component={renderField}
                    name="age"
                    validate={[required]}
                />
                <Button
                    title="Register"
                    bg="steelblue"
                    onPress={handleSubmit(values => submit(values, navigate, reset))}
                    showIndicator={submitting}
                    asyncValidation={!!asyncValidating}
                    disabled={!valid || submitting}
                />
            </>
        );
    }
}

const RegisterForm = reduxForm({
    form: 'registration', // a unique identifier for this form
})(RegistrationForm);

export default RegisterForm;
