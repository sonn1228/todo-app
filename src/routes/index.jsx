import { useRoutes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import TodoApp from "../pages/TodoApp";
import Login from "../pages/Login/Login";
function AppRoutes() {
    const routes = [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/about',
            element: <About />,
        },
        {
            path: '/todos',
            element: <TodoApp />,
        },
        {
            path: '/login',
            element: <Login />,
        },
        { path: '*', element: <NotFound /> },
    ];

    return useRoutes(routes);
}

export default AppRoutes;
