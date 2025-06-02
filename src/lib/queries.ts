export const getTodosQ = async (): Promise<ITodo[]> => {
  const res = await fetch("http://localhost:6541/todos");
  const todos = await res.json();
  return todos;
};
export const deleteTodoQ = async (id: string) => {
  await fetch(`http://localhost:6541/todos/${id}`, {
    method: "DELETE",
  });
};

export const createTodoQ = async (todo: ITodoInput) => {
  await fetch("http://localhost:6541/todos", {
    method: "POST",
    body: JSON.stringify(todo),
  });
};

export const toggleTodoQ = async (id: string, completed: boolean) => {
  await fetch(`http://localhost:6541/todos/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ completed }),
  });
};
