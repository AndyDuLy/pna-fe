import React from 'react'
import './NewTodoForm.css';

import { CreateTodosHook } from "../../HomePage/CreateTodosHook";


export const NewTodoForm = (props) => {
  const [data, setData] = React.useState({
    title: "",
    category: "",
    content: "",
  });

  const { title, category, content } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    if (title && category && content) {
      const res = await CreateTodosHook(title, category, content);

      if (res.status === 201) props.updateHook();
      
      props.closeHook(false);
    } else {
      alert("One or more fields is empty");
    }
  };

  return (
    <div className="new-todo-form-canvas">
      New To Do:

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

      <button className="logout-button" onClick={submit}>
        Create
      </button>
    </div>
  )
}
