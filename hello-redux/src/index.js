// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
//
// ReactDOM.render(<App />, document.getElementById('root'));
import {createStore,combineReducers,applyMiddleware} from "redux";
const initialState={
  result:15000,
  value:[]
}
const userReducer=(state={name:"Non",age:22},action)=>{
  switch (action.type) {
    case "setName":
          state={
          ...state,
          name:action.payload
          }
      break;
    case "setAge":
          state={
          ...state,
          age:action.payload
          }
      break;
    default:

  }
  return state;
}

const employeeReducer=(state=initialState,action)=>{
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
const mylogger=(store)=>(next)=>(action)=>{
  console.log("Log Action",action);
  next(action);
}
const store=createStore(combineReducers({employeeReducer,userReducer}),{},applyMiddleware(mylogger));
store.subscribe(()=>{
  // console.log("Update Store",store.getState());
})
store.dispatch({
  type:"ADD",
  payload:15000
});
store.dispatch({
  type:"setName",
  payload:"Redux"
});
store.dispatch({
  type:"setAge",
  payload:"69"
});