import { Button } from 'react-bootstrap';
import React from 'react';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import { useNavigate } from "react-router-dom";

const TodoList = ({ todoList, setTodo, todo }) => {
    const { description, _id } = todoList;
    const handelCheckBox = id => {
        const url = `http://localhost:5000/todo/${id}`;

        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = todo.filter(item => item._id !== id);
                setTodo(remaining);
            })
    }

    const navigate = useNavigate()
    const handleEdit = id => {
        navigate(`/todo/${id}`)
    }


    return (
        <div className='my-5 d-flex justify-content-around align-items-center border p-3 rounded'>
            <span>
                <FormCheckInput onClick={() => handelCheckBox(_id)} aria-label="option 1" />
            </span>
            <p className='mx-2'>
                {description}
            </p>
            <Button onClick={() => handleEdit(_id)} variant="outline-warning">Edit</Button>
        </div>
    );
};

export default TodoList;