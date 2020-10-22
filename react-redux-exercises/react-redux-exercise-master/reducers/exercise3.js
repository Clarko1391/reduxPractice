import actionTypes from '../actions/actionTypes';

// TODO: Implement me
// I work with /actions/index.js -> boxTicked

const initialState = {
    currentValue: '',
    previousValue: '',
};

const valueChanged = (state, action) => {
    return Object.assign({}, state, {
        previousValue: action.payload.previousValue,
        currentValue: action.payload.currentValue
    });
};

const exercise = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.VALUE_CHANGED):
            return valueChanged(state, action);
        default:
            return state;
    }
};

export default exercise;