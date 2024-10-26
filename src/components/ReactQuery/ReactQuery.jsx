// import lib
import { useQuery } from 'react-query';
import axios from 'axios';

export default function ReactQuery() {
    const { isLoading, error, data } = useQuery('todos', async () => {
        const response = await axios.get('/api/todos');
        return response.data;
    });

    if (isLoading) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;

    return (
        <ul>
            {data.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
}