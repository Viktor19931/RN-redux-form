import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Text} from "../../../../../styles/index";

const footerButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress}>
        <Text h4>{title}</Text>
    </TouchableOpacity>
);

export default footerButton;
