import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';

export const EditTodo = () => {
    const [todo, setTodo] = useState();

    useEffect(() => {
        setTodo({
            text: "foo"
        })
    }, [])

    return todo ? <TodoForm todo={todo} /> : <div>Loading</div> //Checks 'todo'; if yes then renders 'TodoForm' component. Otherwise provides a message.
}