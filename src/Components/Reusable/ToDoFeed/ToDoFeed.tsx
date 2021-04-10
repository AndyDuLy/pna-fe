import React, { useContext } from 'react'
import './ToDoFeed.css';

import TodoObject from "../../Interfaces/TodoObject";

import { TodosContext } from "../../Context/TodosContext";
import { TodoC } from "../TodoC/TodoC";


interface Props {
  theme: String,
}

export const TodoFeed: React.FC<Props> = (props) => {
  const todosContextConsumer = useContext(TodosContext);

  const theme = props.theme;

  return (
    <div className="">
      {todosContextConsumer.state.todos && todosContextConsumer.state.todos.map((todo: TodoObject) => {
        return (
          <div key={todo.id}>
            <TodoC
              Todo={todo}
              theme={theme}
            />
          </div>
        )}
      )}
    </div>
  )
}
