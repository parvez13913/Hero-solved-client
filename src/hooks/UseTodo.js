import { useEffect, useState } from "react"

const UseTodo = () => {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/todo`)
            .then(res => res.json())
            .then(data => setTodo(data));
    }, [])

    return [todo, setTodo]
}

export default UseTodo;