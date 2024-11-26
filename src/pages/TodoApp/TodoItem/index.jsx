import propTypes from 'prop-types';
import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoCheckbox from './components/TodoCheckbox';
import TodoButtons from './components/TodoButton';
import { deleteTodo, patchTodo } from '../../../services/todosService';
import { accessToast } from '../../../helpers/toastify';

export default function TodoItem({
    title,
    completed,
    id,
    setTodosList,
    globalLoading,
    setGlobalLoading,
    setRefreshTodos,
    refreshTodos
}) {
    const [isEditable, setIsEditable] = useState(false);
    const [loading, setLoading] = useState(globalLoading);
    const [todoItem, setTodoItem] = useState({
        title,
        completed,
    });
    const handleDelete = async () => {
        if (confirm("Are you sure?")) {
            setGlobalLoading(true);
            console.log("Running")
            await deleteTodo(id);
            setRefreshTodos(!refreshTodos);
            accessToast("Delete thành công")
            setGlobalLoading(false);
        }
    }
    const handleUpdate = async () => {
        if (confirm("Are you sure?")) {
            setGlobalLoading(true);
            const res = await patchTodo(todoItem, id);
            setGlobalLoading(false);
            setRefreshTodos(!refreshTodos);
            setIsEditable(false);
        }
    }

    return (
        <li key={id} className="todo-item">
            <TodoInput
                todoItem={todoItem}
                setTodoItem={setTodoItem}
                isEditable={isEditable}
                loading={loading}
            />
            <div className="action-btn">
                {isEditable && (
                    <TodoCheckbox
                        id={id}
                        completed={todoItem.completed}
                        todoItem={todoItem}
                        setTodoItem={setTodoItem}
                        loading={loading}
                        handleUpdate={handleUpdate}
                    />
                )}
                <TodoButtons
                    isEditable={isEditable}
                    setIsEditable={setIsEditable}
                    todoItem={todoItem}
                    setTodoItem={setTodoItem}
                    loading={loading}
                    title={title}
                    completed={completed}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}

                />
            </div>
            {loading && <Loading />}
        </li>
    );
}

TodoItem.propTypes = {
    title: propTypes.string.isRequired,
    completed: propTypes.bool.isRequired,
    id: propTypes.string.isRequired,
    setTodosList: propTypes.func.isRequired,
    globalLoading: propTypes.bool.isRequired,
    setGlobalLoading: propTypes.func.isRequired,
};
