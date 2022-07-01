import React, { useEffect, useState } from 'react';
import CompletedTodo from './CompletedTodo';

const Completed = () => {
    const [completedTodos, setCompletedTodos] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/completedTodo`)
            .then(res => res.json())
            .then(data => setCompletedTodos(data));
    }, [])
    return (
        <div>
            <h3 className='text-center my-5'>Completed Tasks</h3>
            {
                completedTodos.map(completedTodo => <CompletedTodo
                    key={completedTodo._id}
                    completedTodo={completedTodo}
                />)
            }
        </div>
    );
};

export default Completed;