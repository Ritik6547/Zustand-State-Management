import TodoItem from "./TodoItem";
import { useTodoStore } from "../../stores/useTodoStore";

const TodoList = ({ setEditingId, setTodoInput }) => {
  const todos = useTodoStore((state) => state.todos);
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            name={todo.name}
            completed={todo.completed}
            id={todo.id}
            setEditingId={setEditingId}
            setTodoInput={setTodoInput}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
