import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import LoginScreen from './src/screens/Auth/LoginScreen/LoginScreen'
import ForgotPasswordScreen from './src/screens/Auth/ForgotPassswordScreen/ForgotPasswordScreen'
import RegistrationScreen from './src/screens/Auth/RegistrationScreen/RegistrationScreen'

import configureStore from './src/store/configureStore';
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";

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

Navigation.registerComponent(
    "App.HomeScreen",
    () => HomeScreen,
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
