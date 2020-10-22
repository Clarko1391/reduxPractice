import React, { PropTypes } from 'react';

const propTypes = {
    currentValue: PropTypes.string.isRequired,
    previousValue: PropTypes.string.isRequired,
    itemSelected: PropTypes.func.isRequired,
};

// This component should stay "dumb" (i.e. stateless)
// It should not have it's own state and should only use props
const ExerciseThree = ({ currentValue, previousValue, itemSelected }) => (
    <div>
        <h1>Exercise 3</h1>
        <div style={{ marginBottom: '10px' }}>

            <select 
                name="colours" 
                id="colours"
                onChange={itemSelected}
                >

                <option 
                    value=""
                    // onChange={itemSelected}
                > 
                </option>

                <option 
                    value="blue"
                    // onChange={itemSelected}
                >Blue
                </option>

                <option 
                    value="white"
                    // onChange={itemSelected}
                >White
                </option>

                <option 
                    value="red"
                    // onChange={itemSelected}
                >Red
                </option>

            </select>
            <h4>{`Currently Selected: | ${currentValue} |`}</h4>
            <h4>{`Previously Selected: | ${previousValue} |`}</h4>
            
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