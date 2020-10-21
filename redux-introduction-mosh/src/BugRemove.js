import React from 'react'
import store from './store';

function BugRemove(props) {
    // Local State
    // const [id, setId] = useState();
    let id;

    // Functions
    const handleResolve = id => {
        console.log(id);
        props.bugResolved(id);
        console.log(store.getState());
    };

    const updateId = (e) => {
        id = e.target.value;
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