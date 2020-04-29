import { ThunkDispatch } from "redux-thunk";
import { ActionTypes, ErrorTodos, FetchedTodos, LoadingTodos, ToggleTodo, DeleteTodo, AddTodo, CreateTodoLoading } from "./types";
import { getDomain } from "../../helpers/Domain";
import { HTTP_OPTIONS, PROTOCOL_METHOD } from "../../helpers/FetchOptions";
import { Todo } from "../../model/Todo";

export const fetchTodos = (): any => {
  return async (
    dispatch: ThunkDispatch<{}, {}, FetchedTodos | ErrorTodos | LoadingTodos>
  ) => {
    dispatch({
      type: ActionTypes.LOADING_TODOS,
      loading: true
    });

    fetch(`${getDomain()}/todos`, HTTP_OPTIONS(PROTOCOL_METHOD.GET))
      .then(res => res.json())
      .then(({ todos, error }) => {
        if (error) throw error;

        dispatch({
          type: ActionTypes.FETCHED_TODOS,
          loading: false,
          todos
        });
      })
      .catch((error: string) => {
        console.log('err: ', error);
        dispatch({
          type: ActionTypes.ERROR_TODOS,
          error,
          loading: false
        });
      });
  };
};

export const createTodo = (title: string, completed: boolean): any => {
  return async (
    dispatch: ThunkDispatch<{}, {}, AddTodo | CreateTodoLoading>
  ) => {

    dispatch({
      type: ActionTypes.CREATE_TODO_LOADING,
      createLoading: true
    });

    fetch(`${getDomain()}/todo`, {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({ title: title, completed })
    })
      .then(res => res.json())
      .then(({ todo, error }) => {
        if (error) throw error;

        dispatch({
          type: ActionTypes.ADD_TODO,
          todo: todo
        })

      })
      .catch(err => {
        console.log('err: ', err);
      })
      .finally(() => {
        dispatch({
          type: ActionTypes.CREATE_TODO_LOADING,
          createLoading: false
        });
      })
  };
};

export const toggleTodo = (todo: Todo): any => {
  return async (
    dispatch: ThunkDispatch<{}, {}, ToggleTodo>
  ) => {
    // Eager update
    dispatch({
      type: ActionTypes.TOGGLE_TODO,
      todo: todo
    });

    fetch(`${getDomain()}/todo/update/${todo._id}`, {
      method: 'put',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      // body: JSON.stringify(todo)
    })
      .then(res => res.json())
      .then(({ todo, error }) => {
        if (error) throw error;
      })
      .catch(err => {
        console.log('err: ', err);
        // Revert the eager update
        dispatch({
          type: ActionTypes.TOGGLE_TODO,
          todo: todo
        });
      })
  };
};

export const deleteTodo = (todo: Todo): any => {
  return async (
    dispatch: ThunkDispatch<{}, {}, DeleteTodo | AddTodo>
  ) => {
    // Eager update
    dispatch({
      type: ActionTypes.DELETE_TODO,
      todo: todo
    });

    fetch(`${getDomain()}/todo/${todo._id}`, {
      method: 'delete',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      // body: JSON.stringify(todo)
    })
      .then(res => res.json())
      .then(({ error }) => {
        if (error) throw error;
      })
      .catch(err => {
        console.log('err: ', err);
        // Revert the eager update
        dispatch({
          type: ActionTypes.ADD_TODO,
          todo: todo
        });
      })
  };
};
