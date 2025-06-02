export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}
export interface ITodoInput {
  title: string;
  completed?: boolean;
}

export interface ITodoFormState {
  title?: string;
  errors?: {
    title?: string[];
  };
}
