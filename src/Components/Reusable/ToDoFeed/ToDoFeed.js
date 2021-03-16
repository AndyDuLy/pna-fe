import React from 'react'
import './ToDoFeed.css';

import { TodoCard } from "../TodoCard/TodoCard";


export const TodoFeed = (props) => {
  const todos = props.todos;

  return (
    <div className="">
      {todos && todos.map((todo) => {
        return (
          <div key={todo.id}>
            <TodoCard
              todo_id={todo.id}
              updateHook={props.updateHook}
              deleteHook={props.deleteHook}
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
