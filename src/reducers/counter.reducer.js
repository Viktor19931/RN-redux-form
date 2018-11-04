import { DECREMENT, INCREMENT } from '../actions/actionTypes';

const initialState = {
    value: 0
}

const counterReducers = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: ++state.value
            };
        case DECREMENT:
            return {
                ...state,
                value: --state.value
            };

        default:
            return state; //state does not change
    }
}

export default counterReducers;
