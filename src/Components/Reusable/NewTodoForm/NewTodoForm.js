import React, { useContext } from 'react'
import './NewTodoForm.css';

import { TodosContext } from "../../Context/TodosContext";
import { CreateTodosHook } from "../../HomePage/CreateTodosHook";


export const NewTodoForm = (props) => {
  const [state, dispatch] = useContext(TodosContext);
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

      if (res.status === 201) {
        const todoObject = {
          id: res.data.objectID,
          title: title,
          category: category,
          content: content,
        };

        dispatch({
          type: "CREATE_TODO",
          payload: todoObject,
        })
      } else {
        console.log('State remains unchanged: ', state);
      }
      
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
