import React, { useContext } from 'react'
import './ToDoFeed.css';

import Todo from "../../Interfaces/Todo";

import { TodosContext } from "../../Context/TodosContext";
import { TodoCard } from "../TodoCard/TodoCard";


export const TodoFeed = () => {
  const todosContextConsumer = useContext(TodosContext);

  return (
    <div className="">
      {todosContextConsumer.state.todos && todosContextConsumer.state.todos.map((todo: Todo) => {
        return (
          <div key={todo.id}>
            <TodoCard
              Todo={todo}
            />
          </div>
        )}
      )}
    </div>
  )
}
