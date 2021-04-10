import React, { useContext } from 'react'
import { HexColorPicker } from "react-colorful";

import TodoObject from "../../Interfaces/TodoObject";

import { TodosContext } from "../../Context/TodosContext";
import { UpdateTodosHook } from "../../../Hooks/UpdateTodosHook";


interface Props {
  todo: TodoObject
  closeHook: (newState: boolean) => void,
}

export const EditTodoForm: React.FC<Props> = (props) => {
  const todosContext = useContext(TodosContext);

  const [color, setColor] = React.useState(`${props.todo.colorCode}`);
  const [data, setData] = React.useState({
    title: `${props.todo.title}`,
    category: `${props.todo.category}`,
    content: `${props.todo.content.content}`,
    done: props.todo.content.done,
  });

  const { title, category, content, done } = data;
  const todoID = props.todo.id;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    if (title && category && color) {
      const res = await UpdateTodosHook(title, category, content, color, todoID);

      if (res.status === 201) {
        todosContext.dispatch({
          type: "EDIT_TODO",
          payload: {
            id: todoID,
            title: title,
            category: category,
            content: { done: done, content: content },
            colorCode: color,
          },
        })
      }

      props.closeHook(false);
    } else {
      alert("One or more fields is empty");
    }
  };

  return (
    <div className="new-todo-form-canvas">
      Update To Do:

      <input                 
        className="input-fields"
        type="text"
        name="title"
        placeholder="Insert New Title Here"
        value={title}
        onChange={handleChange}
      />

      <input                 
        className="input-fields"
        type="text"
        name="category"
        placeholder="Insert New Category Here"
        value={category}
        onChange={handleChange}
      />

      <HexColorPicker
        color={color}
        onChange={setColor}
      />

      <input                 
        className="input-fields"
        type="text"
        name="content"
        placeholder="Insert New Content Here"
        value={content}
        onChange={handleChange}
      />

      <button className="logout-button" onClick={submit}>
        Edit
      </button>
    </div>
  )
}
