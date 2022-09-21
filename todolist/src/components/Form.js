import React from "react";
import { v4 as uuid } from 'uuid';


export const Form = ( {setInputText, setTodos, inputText, todos }) => {

    const inputTextHandler = (e) => {
      console.log(e.target.value);
      setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
      e.preventDefault();
      setTodos([
        ...todos, {text: inputText, completed: false, id: uuid()}
      ]);
      setInputText("");
    };
    return (
        <div>
    <form>
      <input onChange={inputTextHandler} type="text" className="todo-input" value={inputText} />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
        </div>
    )
}