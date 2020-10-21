import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BugInput from './BugInput';
import BugRemove from './BugRemove';

// store.dispatch(bugAdded("Bug 1"));

// console.log(store.getState());

// store.dispatch(bugResolved(1));

// console.log(store.getState());


ReactDOM.render(
  <React.StrictMode>
    <BugInput />
    <BugRemove />
  </React.StrictMode>,
  document.getElementById('root')
);
