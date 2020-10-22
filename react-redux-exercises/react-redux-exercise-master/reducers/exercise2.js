import actionTypes from '../actions/actionTypes';

// TODO: Implement me
// I work with /actions/index.js -> boxTicked

const initialState = {
    hasTickedBox: false,
};

const changeTicked = (state, action) => {
    return Object.assign({}, state, {
        hasTickedBox: action.payload.hasTickedBox,
    });
};

const exercise = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.BOX_TICKED):
            return changeTicked(state, action);
        default:
            return state;
    }
};

export default exercise;
