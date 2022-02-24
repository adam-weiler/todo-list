import React, { useRef } from 'react';
import { TodoForm } from "./TodoForm";

export const CreateTodo = () => {
    const onSubmit = (data) => {   //When the user hits the 'Create Todo' button.
        alert(JSON.stringify(data));    //Alert pops up with user input.
    return true;
    };

    return (
        <div className="container">
            <div className="mt-3">
                <h3>Create Todo Item</h3>
                <TodoForm onSubmit={onSubmit} />
            </div>
        </div>
    );
}