import React from 'react';

import IntelligentExerciseZero from '../containers/IntelligentExerciseZero';
import IntelligentExerciseOne from '../containers/IntelligentExerciseOne';
import IntelligentExerciseTwo from '../containers/IntelligentExerciseTwo';
import IntelligentExerciseThree from '../containers/IntelligentExerciseThree';

// This is where you build the skeleton of your App
// by displaying the right intelligent components
// Meet me in ../components/ExerciseZero after you've understood this file
const App = () => (
    <div>
        <IntelligentExerciseZero />
        <IntelligentExerciseOne />
        <IntelligentExerciseTwo />
        <IntelligentExerciseThree />
    </div>
);

export default App;
