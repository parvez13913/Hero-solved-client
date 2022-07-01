import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import { useForm } from "react-hook-form";


const SingleTodo = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { id } = useParams();

    const onSubmit = data => {
        console.log(data)
        const url = `https://thawing-oasis-67072.herokuapp.com/todo/${id}`;
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

    const { data: todo, isLoading, refetch } = useQuery('id', () => fetch(`https://thawing-oasis-67072.herokuapp.com/todo/${id}`, {
        method: 'GET'
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='container my-5 mx-auto'>
            <h4 className='text-center'>{todo.description}</h4>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <textarea
                        className='my-2 p-2 w-100'
                        type='text'
                        placeholder='Enter Your Daily Tasks'
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Please edit',
                            },

                        })} />
                    {errors.description?.type === 'required' && <p className='text-danger'>{errors.description?.message}</p>}
                    <div>
                        <input className='my-2 p-2 rounded border-0 fw-bold btn-primary w-100' value="Submit" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SingleTodo;