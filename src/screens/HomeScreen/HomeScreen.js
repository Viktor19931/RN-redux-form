import React, {Component} from 'react';
import {Container} from "../../styles";
import {decreaseCounter, increaseCounter} from "../../actions";
import {connect} from "react-redux";
import {View} from "react-native";
import {ButtonsWrapper, CounterBtn, CounterText} from "./HomeScreen.styles";

class HomeScreen extends Component {
    render() {
        return (
            <Container background="#eee">
                <View style={{padding: 20}}>
                    <CounterText h3 counter={this.props.counter}>
                        {this.props.counter}
                    </CounterText>
                </View>
                <ButtonsWrapper>
                    <CounterBtn
                        title="Increment"
                        onPress={this.props.onIncrement}
                        bg="lightblue"
                        style={{marginBottom: 20}}
                    />
                    <CounterBtn
                        title="Decrement"
                        onPress={this.props.onDecrement}
                        bg="lightblue"
                    />
                </ButtonsWrapper>
            </Container>
        );
    }
}

mapStateToProps = state => {
   return {
       counter: state.counter.value
   }
}

mapDispatchToProps = dispatch => {
    return {
        onDecrement: () => dispatch(decreaseCounter()),
        onIncrement: () => dispatch(increaseCounter())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
