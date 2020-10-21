import React, { useState } from 'react'
import store from './store';
import * as actions from './actions';

function BugInput() {
    // Local State
    const [desc, setDesc] = useState('');

    // Functions
    const addBug = () => {
        store.dispatch(actions.bugAdded(desc))
        console.log(store.getState());
        setDesc('');
    };

    const updateDesc = (e) => {
        setDesc(e.target.value);
    }

    return (
        <div>
            <input 
                type="text"
                value = {desc} 
                onChange = {(e) => updateDesc(e)}
            />
            <button
                onClick = {addBug}
                >Add Bug
            </button>
        </div>
    )
}

export default BugInput;
