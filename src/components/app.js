import React from "react";
import AddTodo from "../containers/addTodo";
//import VisibleTodoList from "../containers/visibleTodoList.js";
//import Header from "../components/header";
import TodoList from "../containers/todoList";
import Footer from "../containers/filter";
//import TodoList from "../components/todo-list";

const App = () => (
  <div className="container">
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
);

export default App;
