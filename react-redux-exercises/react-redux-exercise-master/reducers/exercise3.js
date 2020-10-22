import actionTypes from '../actions/actionTypes';
import store from '../store/configureStore';


const initialState = {
    currentValue: '',
    previousValue: ''
};

const itemSelected = (state, action) => {
    return Object.assign({}, state, {
        previousValue: state.currentValue,
        currentValue: action.payload.currentValue,
    });
};

const exercise = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ITEM_SELECTED:
            return itemSelected(state, action);
        default:
            return state;
    }
};

export default exercise;