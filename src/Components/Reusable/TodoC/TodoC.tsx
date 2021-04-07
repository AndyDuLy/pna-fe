import React from 'react'
import './Todo.css';

import TodoObject from "../../Interfaces/TodoObject";
import ThreeDots from "../../../Assets/three-dots.png";
import AddButtonTodoLight from "../../../Assets/add-button-todo-light.png";
import AddButtonTodoDark from "../../../Assets/add-button-todo-dark.png";
import { NewTodoForm } from "../NewTodoForm/NewTodoForm";


interface Props {
  Todo: TodoObject,
  theme: String,
}

export const TodoC: React.FC<Props> = (props) => {
  const [showNewForm, setNewForm] = React.useState(false);

  const theme = props.theme;

  return (
    <>
      <div className={`${theme}-card card-canvas`}>
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
          {theme === "light"
            ? <img
                onClick={() => setNewForm(!showNewForm)}
                className="todo-card-add-todo"
                src={AddButtonTodoLight}
                alt="Add Todo"
              />
            : <img 
                onClick={() => setNewForm(!showNewForm)}
                className="todo-card-add-todo"
                src={AddButtonTodoDark}
                alt="Add Todo" 
              />
          }
        </div>
      </div>

      {showNewForm &&
        <NewTodoForm closeHook={() => setNewForm(false)} theme={theme}/>
      }
    </>
  )
}
