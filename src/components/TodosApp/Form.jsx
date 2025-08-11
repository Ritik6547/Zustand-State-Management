import { useTodoStore } from "../../stores/useTodoStore";

const Form = ({ todoInput, setTodoInput, editingId, setEditingId }) => {
  const addTodo = useTodoStore((state) => state.addTodo);
  const editTodo = useTodoStore((state) => state.editTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoInput.trim()) return;

    if (editingId) {
      editTodo(todoInput, editingId);
      setTodoInput("");
      setEditingId("");
      return;
    }

    addTodo(todoInput);
    setTodoInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setTodoInput(e.target.value)}
        value={todoInput}
        className="todo-input"
        type="text"
        placeholder="Add Todos"
      />
    </form>
  );
};

export default Form;
