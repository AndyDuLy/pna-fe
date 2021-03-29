import React, { useState, useContext } from 'react'
import './TodoCard.css';

import Todo from "../../Interfaces/Todo";

import { TodosContext } from "../../Context/TodosContext";
import { EditTodoForm } from "../EditTodoForm/EditTodoForm";
import { DeleteTodosHook } from "../../HomePage/DeleteTodosHook";


interface Props {
  Todo: Todo,
}

export const TodoCard: React.FC<Props> = (props) => {
  const todosContext = useContext(TodosContext);
  const [showEditForm, setShowEditForm] = useState(false);

  const DeleteTodo = async (id: string) => {
    const res = await DeleteTodosHook(id);

    if (res.status === 201) {
      todosContext.dispatch({
        type: "DELETE_TODO",
        payload: id,
      });
    }
  }

  return (
    <div className="card-canvas">
      <div className="card-color-code"> </div>

      <div className="card-content">
        <span className="card-category"> {props.Todo.category} </span> <br />
        <span className="card-title"> {props.Todo.title} </span> <br />
        <span className="card-todo-content"> {props.Todo.content} </span>
      </div>

      <div>
        <button className="delete-todo-button" onClick={() => DeleteTodo(props.Todo.id)}>
          X
        </button>

        <button className="delete-todo-button" onClick={() => setShowEditForm(!showEditForm)}>
          E
        </button>
      </div>

      {showEditForm &&
        <EditTodoForm
          todoID={props.Todo.id}
          closeHook={() => setShowEditForm(false)}
        />}
    </div>
  )
}
