import React from 'react'


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

  const submit = () => {
    if (title && category && content) {
      props.updateHook({ title, category, content, todoID });
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
