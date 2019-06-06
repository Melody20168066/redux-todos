import React from "react";
import { applyMiddleware, combineREducers, createStore } from "redux";
import createLogger from "redux-logger";
import "./App.css";

//reducer
function counter(state = 10, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
//state
let store = createStore(counter);
//subscribe
let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});
//触发
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });

function App(store) {
  return <div />;
}

export default App;
