import React, { useContext } from 'react'
import { HexColorPicker } from "react-colorful";
import './NewTodoForm.css';
import '../../../index.css';

import CloseIconLight from "../../../Assets/close-icon-light.png";
import { TodosContext } from "../../Context/TodosContext";
import { CreateTodosHook } from "../../../Hooks/CreateTodosHook";


interface Props {
  closeHook: (newState: boolean) => void,
  theme: String,
}

export const NewTodoForm: React.FC<Props> = (props) => {
  const todosContext = useContext(TodosContext);

  const [color, setColor] = React.useState("#aabbcc");
  const [data, setData] = React.useState({
    title: "",
    category: "",
    content: "",
  });

  const { title, category, content } = data;

  const theme = props.theme;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    if (title && category && content) {
      const res = await CreateTodosHook(title, category, content, color);

      if (res.status === 201) {
        const todoObject = {
          id: res.data.objectID,
          title: title,
          category: category,
          content: content,
          colorCode: color,
        };

        todosContext.dispatch({
          type: "CREATE_TODO",
          payload: todoObject,
        })
      }
      
      props.closeHook(false);
    } else {
      alert("One or more fields is empty");
    }
  };

  return (
    <div className={`new-todo-form-${theme} new-todo-form-canvas`}>
      <div className="new-todo-form-topbar">
        <span className="WorkSansSemiBold new-todo-form-heading"> New To Do: </span>
        <img onClick={() => props.closeHook(false)} className="close-icon" src={CloseIconLight} alt="Close Icon" />
      </div>
      
      <input
        className="input-fields"
        type="text"
        name="title"
        placeholder="Insert Title Here"
        value={title}
        onChange={handleChange}
      />

      <input     
        className="input-fields"
        type="text"
        name="category"
        placeholder="Insert Category Here"
        value={category}
        onChange={handleChange}
      />

      <input                 
        className="input-fields"
        type="text"
        name="content"
        placeholder="Insert Content Here"
        value={content}
        onChange={handleChange}
      />

      <div className="color-picker-canvas">
        <HexColorPicker
          color={color}
          onChange={setColor}
        />
      </div>

      <div className={`new-todo-bottombar-${theme} new-todo-bottombar`}>
        <button className={`new-todo-submit-button-${theme} new-todo-submit-button`} onClick={submit}>
          Create
        </button>
      </div>
    </div>
  )
}
