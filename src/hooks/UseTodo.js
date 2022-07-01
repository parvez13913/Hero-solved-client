import { useEffect, useState } from "react"

const UseTodo = () => {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        fetch(`https://thawing-oasis-67072.herokuapp.com/todo`)
            .then(res => res.json())
            .then(data => setTodo(data));
    }, []);

    return [todo, setTodo]
}

export default UseTodo;