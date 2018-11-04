import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga'
import counterReducer from '../reducers/counter.reducer'

export const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    form: formReducer,
    counter: counterReducer,
});

let composeEnhansers = compose;

if (__DEV__) {
    composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => createStore(rootReducer, composeEnhansers(applyMiddleware(sagaMiddleware)));

export default configureStore;
