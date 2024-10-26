import PropTypes from 'prop-types';
import './TodoFilter.css';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchTodosFilter } from '../../../services/todosService';

export default function TodoFilter({
    handleFilterChange,
    setGlobalLoading,
    setTodosList
}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const title = searchParams.get('title');
    const [isLoading, setIsLoading] = useState(false);

    const fetchTodos = async () => {
        setGlobalLoading(true);
        try {
            const response = await fetchTodosFilter(title);
            setTodosList(response.data.todoList);
        } catch (error) {
            console.error('Lỗi khi call API:', error);
        } finally {
            setGlobalLoading(false);
        }
    };

    const handleSearch = (event) => {
        const newTitle = event.target.value;
        if (newTitle) {
            setSearchParams({ title: newTitle });
        } else {
            searchParams.delete('title');
            setSearchParams(searchParams);
        }
        fetchTodos();
    };

    return (
        <form className="form-filter">
            <input
                className="input-filter"
                placeholder="Tìm kiếm todo..."
                type="text"
                value={title || ''}
                onChange={handleSearch}
            />
            {isLoading && <div>Loading...</div>}
        </form>
    );
}

TodoFilter.propTypes = {
    handleFilterChange: PropTypes.func,
};