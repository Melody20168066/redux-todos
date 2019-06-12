import { connect } from "react-redux";
import TodoList from "../components/todo-list";
import { select, deleteTodo } from "../actions/index";
import { setVisibilityFilter, VisibilityFilters } from "../actions/filterTodo";

const getVisibleTodos = (todos, filter) => {
  console.log(filter);
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => {
  console.log(state);
  const todos = getVisibleTodos(state.todos, state.visibilityFilter);
  return { todos };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelected: message => dispatch(select(message)),
    onDelete: message => dispatch(deleteTodo(message))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
