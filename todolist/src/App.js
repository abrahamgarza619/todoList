import React, { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { TodoList } from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form setInputText={setInputText} setTodos={setTodos} inputText={inputText} todos={todos} />
    <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
