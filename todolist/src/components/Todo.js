import React from "react";

export const Todo = ( {text, key, todo, setTodos, todos} ) => {

    const deleteHandler = () => {
        console.log(todo);
        setTodos(todos.filter((el) => el.id !== todo.id));

    }

    return(
        <div className="todo">
            <li className="todo-item" key={key}>{text}</li>
            <button className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
};