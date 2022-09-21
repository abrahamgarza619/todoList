import React from "react";
import { Todo } from "./Todo";

export const TodoList = ( { todos, setTodos }) => {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                    <Todo text={todo.text} completed={todo.completed} key={todo.id} setTodos={setTodos} todo={todo} todos={todos}/>
                ))}
            </ul>
        </div>
    )
}