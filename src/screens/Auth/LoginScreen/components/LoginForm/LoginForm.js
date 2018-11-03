import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {FormControl, TextInput} from "./Loginform.styles";
import {Button, Text} from "../../../../../styles/index";
import {FormContainer} from "../../Login.style";

const renderField = ({label, keyboardType, password, meta}) => {
    console.log(meta);
    return (
        <FormControl>
            <Text h4 bold width={80}>{label}</Text>
            <TextInput
                keyboardType={keyboardType}
                secureTextEntry={password}
            >
            </TextInput>
        </FormControl>);
};

const LoginComponent = props => {
    const {handleSubmit} = props
        console.log(props);

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
            />
        </FormContainer>
    )
}

const LoginForm = reduxForm({
    form: 'login', // a unique identifier for this form
})(LoginComponent);

export default LoginForm
