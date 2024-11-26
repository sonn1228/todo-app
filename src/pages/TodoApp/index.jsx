// import lib
import { useState, useEffect } from "react";

// import file
import Loading from "../../components/Loading/Loading";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";
import TodoFilter from "./TodoFilter/TodoFilter.jsx";
import { fetchTodos } from "../../services/todosService.jsx";
import { useSearchParams } from "react-router-dom";
import { failedToast } from "../../helpers/toastify.jsx";

export default function TodoApp() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(false);
  const [todosList, setTodosList] = useState([]);
  const [refreshTodos, setRefreshTodos] = useState(true);

  const getTodos = async () => {
    if (!loading) {
      setLoading(true);
      const res = await fetchTodos();
      if (res.data) {
        const newTodoList = res.data.todoList.map((item) => {
          return {
            id: item._id,
            title: item.title,
            createdAt: item.createdAt,
            completed: item.completed,
          };
        });
        setTodosList(newTodoList);
      }
      setLoading(false);
    }
  };
  const handleLogout = () => {
    if (token) {
      localStorage.removeItem("token");
      failedToast("Đăng xuất thành công");
    }
  };
  function handleFilterChange(newFilters) {}
  useEffect(() => {
    if (token) {
      getTodos();
    }
  }, [refreshTodos, token]);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <a href="/">
        <button
          onClick={handleLogout}
          className="btn-logout"
          style={{
            color: "red",
            padding: "10px",
            background: "yellow",
            fontWeight: "bold",
          }}
        >
          Log out
        </button>
      </a>

      <main className="container main">
        <div className="container-inner">
          <h1 className="title">Welcome to Todo App!</h1>
          <TodoForm
            setTodosList={setTodosList}
            setGlobalLoading={setLoading}
            loading={loading}
            setRefreshTodos={setRefreshTodos}
            refreshTodos={refreshTodos}
          />
          <TodoFilter
            handleFilterChange={handleFilterChange}
            setGlobalLoading={setLoading}
            setTodosList={setTodosList}
          />

          <TodoList
            setGlobalLoading={setLoading}
            loading={loading}
            data={todosList}
            setTodosList={setTodosList}
            setRefreshTodos={setRefreshTodos}
            refreshTodos={refreshTodos}
          />
        </div>
      </main>
    </>
  );
}
