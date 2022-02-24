import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const TodoList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems([
            {text: "foo", id: 0},
            {text: "bar", id: 1},
            {text: "bazz", id: 2}
        ])
    }, []);

    return <div className="container">
        <div className="mt-3">
            <h3>Todo list</h3>
            <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th>Text</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        <tr key="1">
                        <tr>
                            <td>Foo</td>
                            <td><Link to={'/edit/1'}>Edit</Link></td>
                        </tr>
                     </tr>
                </tbody>
                <tbody>
                        <tr key="2">
                        <tr>
                            <td>Bar</td>
                            <td><Link to={'/edit/2'}>Edit</Link></td>
                        </tr>
                     </tr>
                </tbody>
            </table>
        </div>
    </div>
}