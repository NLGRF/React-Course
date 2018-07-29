// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
//
// ReactDOM.render(<App />, document.getElementById('root'));
import {createStore} from "redux";
const initialState={
  result:15000,
  value:[]
}

const reducer=(state=initialState,action)=>{
  switch (action.type) {
    case "ADD":
          state={
          /*  result:state.result,
            value:state.value */
          ...state, // Show All State
          result:state.result+=action.payload,
          value:[...state.value,action.payload]
          }
      break;
    case "SUBTRACT":
          state={
          /*  result:state.result,
            value:state.value */
          ...state, // Show All State
          result:state.result-=action.payload,
          value:[...state.value,action.payload]
          }
      break;
    default:

  }
  return state;
}
const store=createStore(reducer);
store.subscribe(()=>{
  console.log("Update Store",store.getState());
})
store.dispatch({
  type:"ADD",
  payload:15000
});
store.dispatch({
  type:"ADD",
  payload:15000
});
store.dispatch({
  type:"ADD",
  payload:30000
});
store.dispatch({
  type:"SUBTRACT",
  payload:8000
});