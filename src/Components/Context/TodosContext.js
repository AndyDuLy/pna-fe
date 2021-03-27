import React, { useReducer, createContext } from 'react'


export const TodosContext = createContext();

const initialState = {
  todos: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_TODO":
      return {
        todos: action.payload
      };

    case "CREATE_TODO":
      return {
        todos: [...state.todos, action.payload]
      };

    case "EDIT_TODO":
      var newTodos = state.todos.filter(
        todo => todo.id !== action.payload.newTodo.id
      );

      newTodos = [...newTodos, action.payload.newTodo];

      return {
        todos: newTodos
      };

    case "DELETE_TODO":
      return {
        todos: state.todos.filter(
          todo => todo.id !== action.payload
        )
      };

    default:
      throw new Error();
  }
}

export const TodosContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodosContext.Provider value={[state, dispatch]}>
      {props.children}
    </TodosContext.Provider>
  )
}
