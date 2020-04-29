import {
  ActionTypes,
  ErrorTodos,
  FetchedTodos,
  LoadingTodos,
  TodoState,
  ToggleTodo,
  DeleteTodo,
  AddTodo,
  CreateTodoLoading
} from "./types";

const initialState: TodoState = {
  todos: [],
  loading: true,
  createLoading: false,
};

const todoReducer = () => {
  return (
    state = initialState,
    action: FetchedTodos | ErrorTodos | LoadingTodos | ToggleTodo | DeleteTodo | AddTodo | CreateTodoLoading
  ) => {
    switch (action.type) {
      case ActionTypes.LOADING_TODOS:
        return { ...state, loading: action.loading };

      case ActionTypes.FETCHED_TODOS:
        return {
          ...state,
          todos: action.todos,
          loading: action.loading
        };

      case ActionTypes.ERROR_TODOS:
        return { ...state, error: action.error, loading: action.loading };

      case ActionTypes.TOGGLE_TODO:
        const updatedTodos = state.todos.map(todo => {
          if (todo._id === action.todo._id) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        })
        return { ...state, todos: updatedTodos };

      case ActionTypes.DELETE_TODO:
        const remainingTodos = state.todos.filter(todo => todo._id !== action.todo._id)
        return { ...state, todos: remainingTodos };

      case ActionTypes.ADD_TODO:
        return {
          ...state,
          todos: [...state.todos, action.todo]
        };

      case ActionTypes.CREATE_TODO_LOADING:
        return {
          ...state,
          createLoading: action.createLoading
        };

      default:
        return state;
    }
  };
};

export default todoReducer;
