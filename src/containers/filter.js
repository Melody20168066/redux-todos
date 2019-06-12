import React from "react";
import { connect } from "react-redux";
import { deleteAllTodo, filter } from "../actions/index";
import { VisibilityFilters, setVisibilityFilter } from "../actions/filterTodo";

const Footer = ({ todos, setVisibilityFilter, filter }) => {
  return (
    <footer>
      <span className="todo-count">
        {todos.filter(todo => !todo.completed).length} item left
      </span>
      <ul className="filter">
        <li onClick={() => setVisibilityFilter(VisibilityFilters.SHOW_ALL)}>
          All
        </li>
        <li
          onClick={() => {
            console.log(setVisibilityFilter);
            setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE);
          }}
        >
          Active
        </li>
        <li
          onClick={() => setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED)}
        >
          Completed
        </li>
      </ul>
      <div className="clear-completed" onClick={() => filter("Active")}>
        clear all completed item
      </div>
    </footer>
  );
};

const mapStateToProps = state => {
  //return state;
  return { todos: state.todos };
};

const mapDispatchToProps = dispatch => ({
  setVisibilityFilter: message => dispatch(setVisibilityFilter(message)),
  filter: message => dispatch(filter(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
