import PropTypes from 'prop-types';
import './TodoFilter.css';
import React, { useRef, useState } from 'react'

export default function TodoFilter({
    handleFilterChange
}) {
    const [searchTerm, setSearchTerm] = useState("");
    const typingTimeoutRef = useRef(null);


    const handleSearchTermChange = (e) => {
        const value = e.target.value;
        console.log("Value: ", value);
        setSearchTerm(value);
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

    }
    // const handleSearchTermChange = (e) => {
    //     const value = e.target.value;
    //     setSearchTerm(value);

    //     if (!onSubmit) return;

    //     if (typingTimeoutRef.current) {
    //         clearTimeout(typingTimeoutRef.current);
    //     }

    //     typingTimeoutRef.current = setTimeout(() => {
    //         const formValues = {
    //             searchTerm: value,
    //         };

    //         onSubmit(formValues);
    //     }, 500);
    // }
    return (
        <form className="form-filter" >
            <input
                className="input-filter"
                placeholder="Tìm kiếm todo..."
                type="text"
                // value={searchTerm}
                onChange={handleSearchTermChange}
            />
        </form>
    )
}

TodoFilter.propTypes = {
    handleFilterChange: PropTypes.func,
};