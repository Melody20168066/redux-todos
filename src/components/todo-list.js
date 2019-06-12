import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./todoitem";

const TodoList = ({ todos, onSelected, onDelete }) => {
  console.log(todos);
  return (
    <section>
      <ul>
        {todos.map(
          todo => (
            <TodoItem
              key={todo.id}
              {...todo}
              onSelected={onSelected}
              onDelete={onDelete}
            />
          ),
          this
        )}
      </ul>
    </section>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onSelected: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default TodoList;
