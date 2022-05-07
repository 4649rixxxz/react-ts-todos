import type { TodoType } from "../model";
import Todo from "./Todo";

type TodoListProps = {
    todos: TodoType[];
    setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
    filteredTodos: TodoType[];
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos, filteredTodos }) => {

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;