import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore} from 'redux'

const initialState = {
  count: 0
}

function reducer(state=initialState,action){
  if(action.type === 'increment'){
    state.count = state.count + action.payload
  }else if(action.type === 'decrement'){
    // state.count = state.count - action.payload.num
    
    if(state.count == 0){
      state.count=0
    }
    else
    {
      state.count = state.count - action.payload
    }
  }else if(action.type === 'reset'){
    state.count = 0
  }

  return {...state} // the "..." means grab everything inside of the initialState object 
}

const store = createStore(reducer) // createStore is from 'somewhere,' need to import it

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
