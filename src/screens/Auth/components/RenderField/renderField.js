import React from "react";
import {ErrorContainer, FormControl, TextInput} from "../../LoginScreen/components/LoginForm/Loginform.styles";
import {Row} from "../../../../components/Grid/Row";
import When from "../../../../components/When/When";
import {Text} from "../../../../styles/index";

const renderField = ({
                         label,
                         keyboardType,
                         password,
                         meta: {touched, valid, error, warning, asyncValidating},
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
                    <When is={!!warning || asyncValidating}>
                        <Text h4 style={{color: 'orange'}}>{warning || 'Validating...'}</Text>
                    </When>
                </When>
            </ErrorContainer>
        </FormControl>);
};

export default renderField;
