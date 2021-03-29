import React, { createContext } from 'react'

import Todo from "../Interfaces/Todo";


export interface TodosState {
  todos: Todo[];
}

export const initialState: TodosState = {
  todos: []
}

export type TodosActionType =
  | { type: "POPULATE_TODO"; payload: Todo[] }
  | { type: "CREATE_TODO"; payload: Todo }
  | { type: "EDIT_TODO"; payload: Todo }
  | { type: "DELETE_TODO"; payload: string }
  

export const todosReducer = (state: TodosState, action: TodosActionType) => {
  switch (action.type) {
    case "POPULATE_TODO":
      return {
        ...state,
        todos: action.payload
      };

    case "CREATE_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };

    case "EDIT_TODO":
      var newTodos = state.todos.filter(
        todo => todo.id !== action.payload.id
      );

      newTodos = [...newTodos, action.payload]

      return {
        ...state,
        todos: newTodos
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(
          todo => todo.id !== action.payload
        )
      };

    default:
      throw new Error();
  }
}

export interface ContextProps {
  state: TodosState
  dispatch: React.Dispatch<TodosActionType>
}

export const TodosContext = createContext<ContextProps>({
  state: initialState,
  dispatch: () => {}
});

export const TodosContextConsumer = TodosContext.Consumer;
export const TodosContextProvider = TodosContext.Provider;
