import { useForm } from "react-hook-form";
import React from 'react';
import UseTodo from "../../hooks/UseTodo";
import TodoList from '../Todo/TodoList'
import axios from "axios";

const Todo = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [todo, setTodo] = UseTodo();
    const todos = [...todo].reverse();
    const onSubmit = data => {
        const description = data.description;
        axios.post(`http://localhost:5000/todo`, { description })
            .then(res => {
                // console.log(res);
                // setTodo(description);
            });
        reset();
    }


    return (
        <div className='container'>
            <div className="row">
                <div className="col-12 col-lg-6 col-md-12">
                    <h1 className='text-center mt-5'>Daily Tasks</h1>
                    <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                        <textarea
                            className='my-2 p-2'
                            type='description'
                            placeholder='Enter Your Daily Tasks'
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Task is Required',
                                },

                            })} />
                        {errors.description?.type === 'required' && <p className='text-danger'>{errors.description?.message}</p>}
                        <input className='my-2 p-2 rounded border-0 fw-bold btn-primary' value="Submit" type="submit" />
                    </form>
                </div>
                <div className="col-12 col-lg-6 col-md-12">
                    {
                        todos.map(todoList => <TodoList
                            key={todoList._id}
                            todoList={todoList}
                            todo={todo}
                            setTodo={setTodo}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Todo;