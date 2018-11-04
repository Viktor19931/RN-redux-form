import React from "react";
import { TouchableOpacity, ActivityIndicator } from "react-native";
import { ButtonWrapper, ButtonText } from './Button.styles'
import When from "../../../../../components/When/When";

export class Button extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props != nextProps;
    }

    render() {
        const {title, onPress, disabled, showIndicator, asyncValidation, ...rest} = this.props
        console.log(`async = ${asyncValidation}`);
        return (
            <TouchableOpacity
                disabled={disabled}
                onPress={onPress}>
                    <ButtonWrapper disabled={disabled} {...rest}>
                        <When is={!showIndicator}>
                            <ButtonText>{title}</ButtonText>
                        </When>
                        <When is={showIndicator}>
                            <ActivityIndicator size="small" color="#fff"/>
                        </When>
                    </ButtonWrapper>
            </TouchableOpacity>
        );
    }

}
