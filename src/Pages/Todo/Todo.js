import UseTodo from "../../hooks/UseTodo";
import TodoList from '../Todo/TodoList'
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Todo = () => {
    const [todo, setTodo] = UseTodo();
    const todos = [...todo].reverse();

    const handleAddTodo = event => {
        event.preventDefault();
        const description = event.target.description.value;
        axios.post(`https://thawing-oasis-67072.herokuapp.com/todo`, { description })
            .then(res => {
                if (res.status === 200) {
                    event.target.reset()
                }
            });
    }



    const keyDownHandler = event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleAddTodo();
        }
    };



    return (
        <div className='container'>
            <div className="row">
                <div className="col-12 col-lg-6 col-md-12 my-5">
                    <div className="border p-4 rounded">
                        <h1 className='text-center mt-2'>Daily Tasks</h1>
                        <Form onSubmit={handleAddTodo}>
                            <Form.Group className="mb-3" controlId="formBasicDescription">
                                <Form.Control name="description" type="text" placeholder="Enter Your Task" />
                            </Form.Group>
                            <Button className="w-100" onKeyDown={keyDownHandler} variant="primary" type="submit">
                                Submits
                            </Button>
                        </Form>
                    </div>
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