import TodoItem from "./TodoItem";

const TodoList = async () => {
  const todoRes = await fetch("http://localhost:3000/api/todos", {
    next: { tags: ["todos"] },
  });
  const todos = await todoRes.json();
  return (
    <div className="flex flex-col px-4 w-full">
      <h1 className="font-bold text-lg">Todo List:</h1>
      <ul className="flex flex-col gap-2">
        {todos.map((todo: ITodo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
