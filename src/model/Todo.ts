// Example of a simple type
export type Todo = {
  _id: string;
  title: string;
  completed: boolean;
};

export type TodoFetchResponse = {
  todos: Todo[];
};