import { Button } from 'react-bootstrap';
import React from 'react';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TodoList = ({ todoList, setTodo, todo }) => {
    const { description, _id, date } = todoList;
    const handelCheckBox = id => {
        const url = `https://thawing-oasis-67072.herokuapp.com/todo/${id}`;

        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = todo.filter(item => item._id !== id);
                setTodo(remaining);
            })

        axios.post(`https://thawing-oasis-67072.herokuapp.com/completedTodo`, { description })
            .then(res => {
                // console.log(res)
            })
    }

    const navigate = useNavigate();
    const handleEdit = id => {
        navigate(`/todo/${id}`)
    }

    const navigateToCalnder = id => {
        navigate(`/calender/${id}`);
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
            {
                date ? <p><small className='text-primary'>{date}</small></p> : <Button onClick={() => navigateToCalnder(_id)} variant="outline-danger">Set Date</Button>
            }
        </div>
    );
};

export default TodoList;