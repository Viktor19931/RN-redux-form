import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {ErrorContainer, FormControl, TextInput} from "./Loginform.styles";
import {Button, Text} from "../../../../../styles/index";
import {FormContainer} from "../../Login.style";
import validate from "../../../../../utility/form/validation";
import When from "../../../../../components/When/When";
import {Row} from "../../../../../components/Grid/Row";

const renderField = ({
                         label,
                         keyboardType,
                         password,
                         meta: {touched, valid, error},
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
                    onChangeText={onChange}
                    error={touched && !valid}
                    {...restInput}
                />
            </Row>
            <ErrorContainer>
                <When is={touched}>
                    <When is={!valid}>
                        <Text h4 style={{color: 'red'}}>{error}</Text>
                    </When>
                </When>
            </ErrorContainer>
        </FormControl>);
};

class LoginComponent extends Component {

    render() {
        const {handleSubmit, valid} = this.props
        console.log(valid);

        return (
            <FormContainer>
                <Field
                    keyboardType="email-address"
                    label="Email: "
                    component={renderField}
                    name="email"
                />
                <Field
                    keyboardType="default"
                    password
                    label="Password: "
                    component={renderField}
                    name="password"
                />
                <Button
                    title="Login"
                    bg="steelblue"
                    onPress={handleSubmit}
                    disabled={!valid}
                />
            </FormContainer>
        )
    }
}

const LoginForm = reduxForm({
    form: 'login', // a unique identifier for this form
    validate
})(LoginComponent);

export default LoginForm
