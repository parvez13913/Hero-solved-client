import React, { useEffect, useState } from 'react';

const Completed = () => {
    const [completedTodo, setCompletedTodo] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/completedTodo`)
            .then(res => res.json())
            .then(data => setCompletedTodo(data));
    }, [])
    return (
        <div>
            <h1>length:{completedTodo.length}</h1>
        </div>
    );
};

export default Completed;