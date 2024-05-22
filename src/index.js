import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './styles/index.scss'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const reducer = (state, action ) =>{
  if(action.type === 'PLUS'){
    
    return state + 1
  }if(action.type === 'MINUS'){
    if(state == 0){
      return state 
    }
    return state - 1
  }
  return ( 0)
    
  
}
const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <Provider store={store}>
    <App />
  </Provider>
  );
