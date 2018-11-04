/** @format */

import {AppRegistry, SafeAreaView} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from "react-redux";
import configureStore from './src/store/configureStore'
import rootSaga from "./src/sagas/rootSaga";
import { sagaMiddleware } from './src/store/configureStore'

const store = configureStore();

const RNRedux = () => (
    <Provider store={store}>
        <SafeAreaView>
            <App />
        </SafeAreaView>
    </Provider>
);

sagaMiddleware.run(rootSaga)
AppRegistry.registerComponent(appName, () => RNRedux);
