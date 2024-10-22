import './TodoForm.css';
import propTypes from 'prop-types';
import Button from '../../../components/Button/Button';
import { postTodo } from '../../../services/todosService';
export default function TodoForm({
    setTodosList,
    loading,
    setGlobalLoading,
    setRefreshTodos,
    refreshTodos
}) {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const target = e.target;
        if (!loading && target.todo.value.length > 1) {
            setGlobalLoading(true);
            const newTodo = {
                title: target.todo.value
            }
            await postTodo(newTodo);
            setRefreshTodos(!refreshTodos);
            setGlobalLoading(false);
        }
        else {
            localStorage.removeItem('token');
        }
        setGlobalLoading(false);
    };


    return (<>
        <form onSubmit={handleSubmit} className="form-submit">
            <div className="submit-wrapper">
                <input
                    type="text"
                    name="todo"
                    placeholder="Thêm một việc làm mới"
                    autoFocus
                    className="input-add-todos"
                />
                <Button
                    style="success"
                    className="btn-submit"
                    type="submit"
                    loading={loading}
                    disabled={loading}
                >
                    Thêm mới
                </Button>
            </div>
        </form>
    </>)
}

TodoForm.propTypes = {
    setTodosList: propTypes.func,
    loading: propTypes.bool,
    setGlobalLoading: propTypes.func,
};