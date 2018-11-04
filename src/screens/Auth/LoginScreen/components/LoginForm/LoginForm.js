import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {ErrorContainer, ErrorRow, FormControl, TextInput} from "./Loginform.styles";
import {Text} from "../../../../../styles/index";
import {FormContainer} from "../../Login.style";
import When from "../../../../../components/When/When";
import {Row} from "../../../../../components/Grid/Row";
import {Button} from "../Button/Button";
import {isValidEmail, isYahooMail, minLength6, required} from '../../../../../utility/form/validation'
import submit from "./submit";
import {reset} from 'redux-form';

const renderField = ({
                         label,
                         keyboardType,
                         password,
                         meta: {touched, valid, error, warning},
                         input: {onChange, ...restInput}
                     }) => {
    return (
        <FormControl>
            <Row>
                <Text h4 bold width={80}>{label}</Text>
                <TextInput
                    keyboardType={keyboardType}
                    secureTextEntry={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    onChangeText={onChange}
                    error={touched && error}
                    warning={touched && warning}
                    {...restInput}
                />
            </Row>
            <ErrorContainer>
                <When is={touched}>
                    <When is={!!error}>
                        <Text h4 style={{color: 'red'}}>{error}</Text>
                    </When>
                    <When is={!!warning}>
                        <Text h4 style={{color: 'orange'}}>{warning}</Text>
                    </When>
                </When>
            </ErrorContainer>
        </FormControl>);
};

class LoginComponent extends Component {

    render() {
        const {navigate, handleSubmit, error, valid, submitting, asyncValidating } = this.props

        console.log(this.props);

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
                    onPress={handleSubmit(values => submit(values, navigate))}
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
