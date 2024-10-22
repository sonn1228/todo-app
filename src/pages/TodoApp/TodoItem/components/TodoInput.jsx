// import React from "react";
import propTypes from "prop-types";

import "../assets/TodoItem.css";

export default function TodoInput({
  todoItem = {
    completed: false,
    title: "Loading...",
  },
  loading,
  isEditable,
  setTodoItem,
}) {
  return (
    <input
      className={`${todoItem.completed ? "line-through todo-item-only" : "todo-item-only"
        }`}
      value={todoItem.title}
      readOnly={!isEditable}
      disabled={loading}
      onChange={(e) => {
        console.log("Value: ", e.target.value);
        setTodoItem((prev) => ({ ...prev, title: e.target.value }))
      }}
    />
  );
}

TodoInput.propTypes = {
  todoItem: propTypes.shape({
    completed: propTypes.bool,
    todo: propTypes.string,
  }),
  loading: propTypes.bool.isRequired,
  isEditable: propTypes.bool.isRequired,
  setTodoItem: propTypes.func.isRequired,
};
