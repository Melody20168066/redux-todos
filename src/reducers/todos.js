const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: action.completed
        }
      ];
    case "SELECT_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.id);
    case "DELETE_ALL_TODO":
      return state.filter(todo => !todo.completed);
    case "FILTER_TODO":
      if (action.filter === "Active")
        return state.filter(todo => !todo.completed);
      else if (action.filter === "Completed")
        return state.filter(todo => todo.completed);
      else return state;
    default:
      return state;
  }
};
export default todos;
