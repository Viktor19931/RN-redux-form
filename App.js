import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import LoginScreen from './src/screens/Auth/LoginScreen/LoginScreen'
import ForgotPasswordScreen from './src/screens/Auth/ForgotPassswordScreen/ForgotPassword'
import RegistrationScreen from './src/screens/Auth/RegistrationScreen/RegistrationScreen'

import configureStore from './src/store/configureStore';

const store = configureStore();


// Register Screens
Navigation.registerComponent(
    "App.LoginScreen",
    () => LoginScreen,
    store,
    Provider
);

Navigation.registerComponent(
    "App.RegistrationScreen",
    () => RegistrationScreen,
    store,
    Provider
);

Navigation.registerComponent(
    "App.ForgotPasswordScreen",
    () => ForgotPasswordScreen,
    store,
    Provider
);


// Start an App
Navigation.startSingleScreenApp({
    screen: {
        screen: "App.LoginScreen",
        title: "Login"
    }
});
