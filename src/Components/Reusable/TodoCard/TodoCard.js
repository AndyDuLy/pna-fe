import React, { useState, useContext } from 'react'
import './TodoCard.css';

import { TodosContext } from "../../Context/TodosContext";
import { EditTodoForm } from "../EditTodoForm/EditTodoForm";
import { DeleteTodosHook } from "../../HomePage/DeleteTodosHook";


export const TodoCard = (props) => {
  const [state, dispatch] = useContext(TodosContext);
  const [showEditForm, setShowEditForm] = useState(false);

  const DeleteTodo = async (id) => {
    const res = await DeleteTodosHook(id);

    if (res.status === 201) {
      dispatch({
        type: "DELETE_TODO",
        payload: id,
      });
    } else {
      console.log('State remains unchanged: ', state);
    }
  }

  return (
    <div className="card-canvas">
      <div className="card-color-code"> </div>

      <div className="card-content">
        <span className="card-category"> {props.category} </span> <br />
        <span className="card-title"> {props.title} </span> <br />
        <span className="card-todo-content"> {props.content} </span>
      </div>

      <div>
        <button className="delete-todo-button" onClick={() => DeleteTodo(props.todo_id)}>
          X
        </button>

        <button className="delete-todo-button" onClick={() => setShowEditForm(!showEditForm)}>
          E
        </button>
      </div>

      {showEditForm &&
        <EditTodoForm
          todoID={props.todo_id}
          closeHook={() => setShowEditForm(false)}
        />}
    </div>
  )
}
