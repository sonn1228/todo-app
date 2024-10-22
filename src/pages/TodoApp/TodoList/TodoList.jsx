import './TodoList.css';
import propTypes from 'prop-types';
import TodoItem from '../TodoItem';

export default function TodoList({
    setGlobalLoading,
    loading,
    data = [],
    setTodosList,
    setRefreshTodos,
    refreshTodos
}) {
    return (<><ul className="list-todo">
        {Array.isArray(data) && data.length > 0 ? (
            data.map(({ title, completed, id }) => {
                return (
                    <TodoItem
                        globalLoading={loading}
                        setGlobalLoading={setGlobalLoading}
                        key={id}
                        title={title}
                        completed={completed}
                        id={id}
                        setTodosList={setTodosList}
                        setRefreshTodos={setRefreshTodos}
                        refreshTodos={refreshTodos}
                    />
                );
            })
        ) : (
            <li className="no-todo">Không có todo</li>
        )}
    </ul>
    </>)
}


TodoList.propTypes = {
    data: propTypes.array.isRequired,
    setTodosList: propTypes.func,
    loading: propTypes.bool,
    setGlobalLoading: propTypes.func,
};