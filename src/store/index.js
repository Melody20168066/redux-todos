import { createStore } from "redux";
import todoApp from "../reducers/index";

let store = createStore(todoApp); //create store
//var { dispatch, subscribe, getState } = store;

export default store;
