import * as actions from './actionTypes';


// Using function declaration
// export function bugAdded(description) {
//     return {
//         type: actions.BUG_ADDED,
//         payload: {
//             description: "Bug1"
//         }
//     }
// }


// Using arrow function... Note that the function's curly braces are wrapped in regular brackets
// This is done because we are returning an object within the funtion, otherwise we would get an error
// Note that the return can be excluded as an arrow function returns by default
export const bugAdded = description => ({
        type: actions.BUG_ADDED,
        payload: {
            description
        }
});

export const bugResolved = id => ({
        type: actions.BUG_RESOLVED,
        payload: {
            id
        }
});