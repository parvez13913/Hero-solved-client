import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";


const SingleTodo = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { id } = useParams();

    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/todo/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        reset();
    }

    const { data: todo, isLoading, refetch } = useQuery('id', () => fetch(`http://localhost:5000/todo/${id}`, {
        method: 'GET'
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    if (todo) {
        console.log(todo)
    }


    return (
        <div>
            <h2>single todo: {id}</h2>
            <h4>{todo.description}</h4>

            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea
                    className='my-2 p-2'
                    type='text'
                    placeholder='Enter Your Daily Tasks'
                    {...register("description", {
                        required: {
                            value: true,
                            message: 'Please edit',
                        },

                    })} />
                {errors.description?.type === 'required' && <p className='text-danger'>{errors.description?.message}</p>}
                <input className='my-2 p-2 rounded border-0 fw-bold btn-primary' value="Submit" type="submit" />
            </form>
        </div>
    );
};

export default SingleTodo;