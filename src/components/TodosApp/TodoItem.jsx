import { useTodoStore } from "../../stores/useTodoStore";

const TodoItem = ({ name, completed, id, setEditingId, setTodoInput }) => {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  const handleEdit = (id) => {
    setEditingId(id);
    setTodoInput(name);
  };

  return (
    <li className="todo-item">
      <span className={completed ? "completed" : ""}>{name}</span>
      <button onClick={() => toggleTodo(id)}>Toggle</button>
      <button onClick={() => deleteTodo(id)}>Delete</button>
      <button onClick={() => handleEdit(id)}>Edit</button>
    </li>
  );
};

export default TodoItem;
