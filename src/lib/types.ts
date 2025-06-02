interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}
interface ITodoInput {
  title: string;
  completed?: boolean;
}

interface ITodoFormState {
  title?: string;
  errors?: {
    title?: string[];
  };
}
