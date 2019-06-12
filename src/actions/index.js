let nextTodoId = 0;

/*todos */
//add
export const addTodo = (text, completed) => {
  return {
    type: "ADD_TODO",
    id: nextTodoId++,
    completed: completed,
    text
  };
};
//select
export const select = id => {
  return {
    type: "SELECT_TODO",
    id
  };
};
//deleteTodo
export const deleteTodo = id => {
  return {
    type: "DELETE_TODO",
    id
  };
};
//delete all
export const deleteAllTodo = () => {
  return {
    type: "DELETE_ALL_TODO"
  };
};

/* filter */
export const filter = filter => {
  return {
    type: "FILTER_TODO",
    filter
  };
};
