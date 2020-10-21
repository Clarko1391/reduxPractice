import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BugInput from './BugInput';
import BugRemove from './BugRemove';
import { bugAdded, bugResolved } from './actions';
import store from './store';

// store.dispatch(bugAdded("Bug 1"));

// console.log(store.getState());

// store.dispatch(bugResolved(1));

// console.log(store.getState());


ReactDOM.render(
  <React.StrictMode>
    <BugInput />
    <BugRemove 
        bugResolved = {bugResolved}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
