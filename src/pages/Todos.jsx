import React, { useEffect, useState } from 'react'

const Todos = () => {

    // Array destructuring for Todos
    const [todos, setTodos] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json()).then((todos) => setTodos(todos))
    }, [])

    return (
        <div>
            <h3>Todos</h3>
            {todos.map((todo, index) => (
                <div>
                    <h3 key={todo.id}> {todo.id}: {todo.title} : {todo.completed}</h3>
                    <p>{todo.completed}</p>
                </div>
            ))};
        </div>
    )
}

export default Todos