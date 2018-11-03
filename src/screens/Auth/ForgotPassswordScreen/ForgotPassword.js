import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container} from "../../../styles/Container";

class ForgotPassword extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Container background="#eee">
                    <Text>ForgotPassword created !</Text>
                </Container>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ForgotPassword;
