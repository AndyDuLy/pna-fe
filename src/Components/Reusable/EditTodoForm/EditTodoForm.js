import React from 'react'

import { UpdateTodosHook } from "../../HomePage/UpdateTodosHook";


export const EditTodoForm = (props) => {
  const [data, setData] = React.useState({
    title: "",
    category: "",
    content: "",
  });

  const { title, category, content } = data;
  const todoID = props.todoID;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    if (title && category && content) {
      const res = await UpdateTodosHook(title, category, content, todoID);

      if (res.status === 201) props.updateFeedHook();

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
