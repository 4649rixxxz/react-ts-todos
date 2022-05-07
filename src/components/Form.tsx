import type { TodoType } from "../model";

type FormProps = {
    inputText: string;
    setInputText: React.Dispatch<React.SetStateAction<string>>;
    todos: TodoType[];
    setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
    setStatus: React.Dispatch<React.SetStateAction<string>>;
}

const Form: React.FC<FormProps> = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
    const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputText(e.target.value);
    }
    const submitTodoHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setTodos([
        ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
      ])
      setInputText('');
    }
    const statusHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setStatus(e.target.value);
    };
  
    return (
      <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
  }
  
  export default Form;