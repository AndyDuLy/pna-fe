import React, { useEffect, useState } from "react";
import axios from "axios";

import { TodoFeed } from './Reusable/ToDoFeed/ToDoFeed';
import { NewTodoForm } from './Reusable/NewTodoForm/NewTodoForm';


const HomePage = (props) => {
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);
  const [showInputForm, setShowInputForm] = useState(false);

  const getUser = async () => {
    const res = await axios.get("http://localhost:5000/auth/user",{
      headers: {
        "Authorization": `${localStorage.getItem("token")}`,
      },
      params: {
        userid: `${localStorage.getItem("userID")}`,
      }
    });

    setUser(res.data.name);
    setTodos(res.data.todos);
  };

  useEffect(() => {
    getUser();
  }, []);

  const getTodos = async () => {
    const res = await axios.get("http://localhost:5000/todos/getTodo", {
      headers: {
        "Authorization": `${localStorage.getItem("token")}`,
      },
      params: {
        userid: `${localStorage.getItem("userID")}`
      }
    });

    setTodos(res.data);
  }

  const createTodo = async (data) => {
    await axios.post("http://localhost:5000/todos/newTodo",
      {
        title: data.title,
        category: data.category,
        content: data.content,
        userID: `${localStorage.getItem("userID")}`,
      },

      {
      headers: {
        "Authorization": `${localStorage.getItem("token")}`,
      },
    });

    getTodos();
  }

  const updateTodo = async (data) => {
    await axios.put("http://localhost:5000/todos/updateTodo",
    {
      title: data.title,
      category: data.category,
      content: data.content,
      todoID: data.todoID,
      userID: `${localStorage.getItem("userID")}`,
    },
    {
      headers: {
        "Authorization": `${localStorage.getItem("token")}`,
      },
    });

    getTodos();
  }

  const deleteTodo = async (e) => {
    await axios.delete("http://localhost:5000/todos/deleteTodo", {
      headers: {
        "Authorization": `${localStorage.getItem("token")}`,
      },

      data: {
        userID: `${localStorage.getItem("userID")}`,
        todoID: `${e}`,
      },
    });

    getTodos();
  }

  const logout = () => {
    localStorage.removeItem("token");
    props.history.push("/login");
  };

  if (!localStorage.getItem("token")) {
    props.history.push("/login");
  }

  return (
    <div className="">
      <div className="header">
        <p className="lead"> Welcome, {user}! </p>

        <button className="logout-button" onClick={logout}>
          Logout
        </button>
      </div>

      <div className="todo-content-area">
        <TodoFeed todos={todos} updateHook={updateTodo} deleteHook={deleteTodo}/>
      </div>

      <div className="create-button-canvas">
        <button className="create-button" onClick={() => setShowInputForm(!showInputForm)}>
          +
        </button>
      </div>

      {showInputForm && <NewTodoForm closeHook={setShowInputForm} createHook={createTodo} />}
    </div>
  );
};

export default HomePage;
