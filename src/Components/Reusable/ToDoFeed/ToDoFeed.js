import React, { useContext } from 'react'
import './ToDoFeed.css';

import { TodosContext } from "../../Context/TodosContext";
import { TodoCard } from "../TodoCard/TodoCard";


export const TodoFeed = () => {
  const [state, dispatch] = useContext(TodosContext);

  if (!state) console.log('State empty; modify through reducer: ', dispatch)

  return (
    <div className="">
      {state.todos && state.todos.map((todo) => {
        return (
          <div key={todo.id}>
            <TodoCard
              todo_id={todo.id}
              title={todo.title}
              category={todo.category}
              content={todo.content}
            />
          </div>
        )}
      )}
    </div>
  )
}
