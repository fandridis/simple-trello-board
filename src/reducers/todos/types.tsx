import { Todo } from "../../model/Todo";

export enum ActionTypes {
  LOADING_TODOS = "LOADING_TODOS",
  FETCHED_TODOS = "FETCHED_TODOS",
  ERROR_TODOS = "ERROR_TODOS",
  TOGGLE_TODO = "TOGGLE_TODO",
  DELETE_TODO = "DELETE_TODO",
  ADD_TODO = "ADD_TODO",
  CREATE_TODO_LOADING = "CREATE_TODO_LOADING",
}

/**
 * Action Types
 */
export type LoadingTodos = {
  type: ActionTypes.LOADING_TODOS;
  loading: boolean;
};
export type FetchedTodos = {
  todos: Todo[];
  type: ActionTypes.FETCHED_TODOS;
  loading: boolean;
};
export type ErrorTodos = {
  type: ActionTypes.ERROR_TODOS;
  error: string;
  loading: boolean;
};
export type ToggleTodo = {
  type: ActionTypes.TOGGLE_TODO;
  todo: Todo;
};
export type DeleteTodo = {
  type: ActionTypes.DELETE_TODO;
  todo: Todo;
};
export type AddTodo = {
  type: ActionTypes.ADD_TODO;
  todo: Todo;
};
export type CreateTodoLoading = {
  type: ActionTypes.CREATE_TODO_LOADING;
  createLoading: boolean;
}

/**
 * State Type
 */
export type TodoState = {
  todos: Todo[];
  loading: boolean;
  error?: string;
  createLoading: boolean;
};
