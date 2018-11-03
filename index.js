/** @format */

import {AppRegistry, SafeAreaView} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from "react-redux";
import configureStore from './src/store/configureStore'

const store = configureStore();

const RNRedux = () => (
    <Provider store={store}>
        <SafeAreaView>
            <App />
        </SafeAreaView>
    </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
