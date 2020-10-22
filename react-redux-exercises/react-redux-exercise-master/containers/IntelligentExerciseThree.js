import { connect } from 'react-redux';
import ExerciseThree from '../components/ExerciseThree';
import * as actions from '../actions';

const mapStateToProps = (state) => {
    return {
        currentValue: state.exercise3.currentValue,
        previousValue: state.exercise3.previousValue,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        itemSelected: (event) => {
            dispatch(actions.itemSelected(event));
        },
    };
};

const IntelligentExerciseThree = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ExerciseThree);

export default IntelligentExerciseThree;