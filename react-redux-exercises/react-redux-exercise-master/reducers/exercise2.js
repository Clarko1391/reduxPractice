import actionTypes from '../actions/actionTypes';

// TODO: Implement me
// I work with /actions/index.js -> boxTicked

const initialState = {
    hasTickedBox: false,
};

const exercise = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.BOX_TICKED):
            return Object.assign({}, state, {
                hasTickedBox: true,
            });
        default:
            return state;
    }
};

export default exercise;
