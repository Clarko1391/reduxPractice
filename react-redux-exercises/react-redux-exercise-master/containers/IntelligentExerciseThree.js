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
        valueChanged: (event) => {
            dispatch(actions.valueChanged(event));
        },
    };
};

const IntelligentExerciseThree = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ExerciseThree);

export default IntelligentExerciseThree;