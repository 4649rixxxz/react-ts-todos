import { useState, useEffect } from 'react';
import './App.css';
import type { TodoType } from "./model";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  const [inputText, setInputText] = useState<string>("");
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [status, setStatus] = useState<string>('all');
  const [filteredTodos, setFilteredTodos] = useState<TodoType[]>([]);
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  // TodoとStatusが更新されるたびにfilterする
  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  
  return (
    <div className="App">
      <header>
        <h1>Ed's Todo List</h1>
      </header>
      <Form 
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList 
        setTodos={setTodos} 
        todos={todos}
        filteredTodos={filteredTodos} 
      />
    </div>
  );
}

export default App;
