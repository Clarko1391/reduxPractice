import React, { PropTypes } from 'react';

const propTypes = {
    currentValue: PropTypes.string.isRequired,
    previousValue: PropTypes.string.isRequired,
    valueChanged: PropTypes.func.isRequired,
};

// This component should stay "dumb" (i.e. stateless)
// It should not have it's own state and should only use props
const ExerciseThree = ({ currentValue, previousValue, valueChanged }) => (
    <div>
        <h1>Exercise 3</h1>
        <div style={{ marginBottom: '10px' }}>

            <select name="colours" id="colours" value={currentValue}>

                <option 
                    value=""
                    onClick={valueChanged}
                > 
                </option>

                <option 
                    value="blue"
                    onClick={valueChanged}
                >Blue
                </option>

                <option 
                    value="white"
                    onClick={valueChanged}
                >White
                </option>

                <option 
                    value="red"
                    onClick={valueChanged}
                >Red
                </option>

            </select>
            <h4>{previousValue}</h4>
            
            {/* <i>
                Build me from scratch!<br />
                I need to be a select field which will display the new selected value<br />
                BONUS POINT: and the previous selected value ;)<br />
                Select values are [&apos;&apos;, &apos;blue&apos;, &apos;white&apos;, &apos;red&apos;
                ] - default value = &apos;&apos;
            </i> */}
        </div>
    </div>
);

ExerciseThree.propTypes = propTypes;

export default ExerciseThree;