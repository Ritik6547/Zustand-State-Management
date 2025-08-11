import { useState } from "react";
import { useTodoStore } from "../../stores/useTodoStore";
import Form from "./Form";
import TodoList from "./TodoList";

const Todos = () => {
  const [todoInput, setTodoInput] = useState("");
  const [editingId, setEditingId] = useState("");

  const todos = useTodoStore((state) => state.todos);

  return (
    <div className="todos">
      <h1>Todo App</h1>
      <Form
        editingId={editingId}
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        setEditingId={setEditingId}
      />
      {todos.length ? (
        <TodoList setEditingId={setEditingId} setTodoInput={setTodoInput} />
      ) : (
        <h2>No Todos</h2>
      )}
    </div>
  );
};

export default Todos;
