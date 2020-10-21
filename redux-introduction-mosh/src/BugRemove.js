import React, { useState } from 'react'
import store from './store';
import { bugResolved } from './actions';

function BugRemove() {
    // Local State
    const [id, setId] = useState();

    // Functions
    const handleResolve = id => {
        store.dispatch(bugResolved(parseInt(id)));
        console.log(store.getState());
    };

    const updateId = (e) => {
        setId(e.target.value);
        console.log(id);
    }

    return (
        <div>
            <input 
                type="number"
                value = {id} 
                placeholder = "Enter Bug ID to resolve"
                onChange = {(e) => updateId(e)}
            />
            <button
                onClick = {() => handleResolve(id)}
                >Resolve Bug
            </button>
        </div>
    )
}

export default BugRemove;