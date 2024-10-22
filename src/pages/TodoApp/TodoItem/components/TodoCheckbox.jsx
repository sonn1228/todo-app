import propTypes from "prop-types";

import "../assets/TodoCheckbox.css";

export default function TodoCheckbox({
  id,
  completed,
  loading,
  setTodoItem,
  todoItem,
  handleUpdate
}) {
  return (
    <div className="checkbox-container">
      <label htmlFor={id} className="text-checkbox">
        {!completed ? "Not Completed" : "Completed"}
      </label>
      <input
        id={id}
        type="checkbox"
        checked={completed}
        disabled={loading}
        onChange={(e) =>
          setTodoItem({ ...todoItem, completed: e.target.checked })
        }
        className={`form-checkbox `}
      />
    </div>
  );
}

TodoCheckbox.propTypes = {
  id: propTypes.string.isRequired,
  completed: propTypes.bool.isRequired,
  setTodoItem: propTypes.func.isRequired,
  loading: propTypes.bool.isRequired,
  todoItem: propTypes.object.isRequired,
};
