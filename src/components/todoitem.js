import React from "react";
import "../App.css";

const TodoItem = props => {
  console.log(props);
  console.log(props.completed);
  return (
    <li className={props.completed ? "done" : ""}>
      <div className="view">
        <input
          type="checkbox"
          name="toggle"
          onChange={() => {
            return props.onSelected(props.id);
          }}
          checked={props.completed}
        />
        <label>{props.text}</label>
      </div>
      <a href="#" className="destroy" onClick={() => props.onDelete(props.id)}>
        x
      </a>
    </li>
  );
};

export default TodoItem;
