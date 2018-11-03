import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Container} from "../../../styles/Container";

class RegistrationScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Container background="#eee">
                    <Text>RegistrationScreen created !</Text>
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

export default RegistrationScreen;
