import React from "react";
import { TouchableOpacity } from "react-native";
import { ButtonWrapper, ButtonText } from './Button.styles'

export class Button extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.disabled != nextProps.disabled;
    }
    render() {
        const {title, onPress, disabled, ...rest} = this.props
        return (
            <TouchableOpacity
                disabled={disabled}
                onPress={onPress}>
                <ButtonWrapper disabled={disabled} {...rest}>
                    <ButtonText>{title}</ButtonText>
                </ButtonWrapper>
            </TouchableOpacity>
        );
    }

}
