import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

export const TodoForm = ({ todo, onSubmit }) => {
    const { register, handleSubmit } = useForm({ 
        defaultValues: { text: todo ? todo.text : "" },
    });

    const submitHandler = handleSubmit((data) => {   //When the user hits the 'Create Todo' button.
        onSubmit(data);
    });

    return(
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="text">
                    Text:
                </label>
                <input className="form-control" ref={register} type="text" name="text" id="text" />
            </div>
            <div className="form-group">
                <button className="btn btn-primary">
                    Save Todo
                </button>
            </div>
        </form>
    );
}