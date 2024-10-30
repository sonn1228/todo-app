import axios from 'axios';
export const BASE_URL = 'https://api-xi-fawn.vercel.app/api/v1'
export const endpoint = {
    todos: '/todos'
}

// res.data -> res.json({ backend })
export const fetchTodos = async () => {
    const res = await axios.get(`${BASE_URL}${endpoint.todos}`);
    console.log("res: ", res)
    return res.data;
};
export const fetchTodosFilter = async (title) => {
    const res = await axios.get(`${BASE_URL}${endpoint.todos}?title=${title}`);
    return res.data;
};
export const postTodo = async (todo) => {
    const response = await axios.post(`${BASE_URL}${endpoint.todos}`, {
        ...todo
    });
    return response.data;
};
export const deleteTodo = async (id) => {
    const response = await axios.delete(`${BASE_URL}${endpoint.todos}/${id}`);
    return response.data;
};
export const axiosPostAPI = async (email, password) => {
    const response = await axios.post(`${BASE_URL}${endpoint.todos}`, {
        email,
        password,
    });
    return response.data;
};
export const patchTodo = async (body, id) => {
    const res = await axios.patch(`${BASE_URL}${endpoint.todos}/${id}`, {
        ...body
    }, {
        headers: {
            'Authorization': 'Bearer your_token'
        }
    })
    return res.data;
}


export const axiosDeleteAPI = async (url) => {
    const response = await axios.delete(url);
    return response.data;
};

export const axiosWithBearerToken = async (url, token) => {
    const response = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};