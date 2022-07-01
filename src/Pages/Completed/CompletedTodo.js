import React from 'react';

const CompletedTodo = ({ completedTodo }) => {
    const { description } = completedTodo;
    return (
        <div className='container'>
            <div className='my-5 text-center border p-3 rounded'>
                <p className='mx-2'>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default CompletedTodo;