import React from 'react';

export const TodoForm = ({ todo }) => {

    const { register, handleSubmit } = useForm({ 
        defaultValues: { text: todo ? todo.text : "" },
    });
    const history = useHistory();   //Needs this for redirect.

    useEffect(() => {
        setTodo({
            text: "foo"
        })
    }, [])

    const onSubmit = handleSubmit((data) => {   //When the user hits the 'Create Todo' button.
        alert(JSON.stringify(data));    //Alert pops up with user input.
        history.push("/");  //Redirects user to 'TodoList.js' root page.
    return true;
    });


    return(
    
    <div className="container">
    <div className="mt-3">
        <h3>Edit Todo Item</h3>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">
                    Text:
                </label>
                <input className="form-control" ref={register} type="text" name="text" id="text" />
            </div>
            <div className="form-group">
                <button className="btn btn-primary">
                    Create Todo
                    </button>
            </div>
        </form>
    </div>
</div>
    );
}