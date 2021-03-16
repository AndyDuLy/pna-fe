import React, { useState } from 'react'
import './TodoCard.css';

import { EditTodoForm } from "../EditTodoForm/EditTodoForm";


export const TodoCard = (props) => {
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <div className="card-canvas">
      <div className="card-color-code"> </div>

      <div className="card-content">
        <span className="card-category"> {props.category} </span> <br />
        <span className="card-title"> {props.title} </span> <br />
        <span className="card-todo-content"> {props.content} </span>
      </div>

      <div>
        <button className="delete-todo-button" onClick={() => props.deleteHook(props.todo_id)}>
          X
        </button>

        <button className="delete-todo-button" onClick={() => setShowEditForm(!showEditForm)}>
          E
        </button>
      </div>

      {showEditForm &&
        <EditTodoForm
          todoID={props.todo_id}
          updateHook={props.updateHook}
          closeHook={() => setShowEditForm(false)}
        />}
    </div>
  )
}
