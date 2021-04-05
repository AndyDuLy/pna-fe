import React from 'react'
import './Todo.css';

import TodoObject from "../../Interfaces/TodoObject";
import ThreeDots from "../../../Assets/three-dots.png";
import AddButtonTodoLight from "../../../Assets/add-button-todo-light.png";
import AddButtonTodoDark from "../../../Assets/add-button-todo-dark.png";


interface Props {
  Todo: TodoObject,
  theme: String,
}

export const TodoC: React.FC<Props> = (props) => {


  return (
    <div className={`${props.theme}-card card-canvas`}>
      <div className="todo-card-top-canvas">
        <span className="todo-card-title WorkSansSemiBold"> {props.Todo.title} </span>
        <span className="edit-button"> 
          <img src={ThreeDots} alt="Options" />
        </span>

        <span className="todo-card-category WorkSansRegular"> {props.Todo.category} </span> <br />
      </div>

      <div>
        {props.Todo.todos.map((todo) => {
          return (
            <div className="todo-card-todo-list WorkSansLight">
              <span
                className={todo.done === true
                  ? props.theme === "light"
                    ? "completed-todo-light"
                    : "completed-todo-dark"
                  : ""
              }>
                {todo.content}
              </span> <br />
            </div>
          )
        })}
      </div>

      <div className="todo-card-bottom-canvas">
        {props.theme === "light"
          ? <img className="todo-card-add-todo" src={AddButtonTodoLight} alt="Add Todo" />
          : <img className="todo-card-add-todo" src={AddButtonTodoDark} alt="Add Todo" />
        }
      </div>
    </div>
  )
}
