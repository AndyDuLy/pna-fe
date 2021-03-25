import React, { useEffect, useState } from "react";

import { TodoFeed } from '../Reusable/ToDoFeed/ToDoFeed';
import { NewTodoForm } from '../Reusable/NewTodoForm/NewTodoForm';

import { GetUserHook } from "./GetUserHook";
import { GetTodosHook } from "./GetTodosHook";
import { UpdateTodosHook } from "./UpdateTodosHook";
import { DeleteTodosHook } from "./DeleteTodosHook";
import { LogoutHook } from "../Logout/LogoutHook";


const HomePage = (props) => {
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);
  const [showInputForm, setShowInputForm] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await GetUserHook();
      setUser(res.data.name);
      setTodos(res.data.todos);
    }
    
    fetchData();
  }, []);

  const updateFeed = async () => {
    const res = await GetTodosHook();
    setTodos(res.data);
  }

  if (!localStorage.getItem("token")) {
    props.history.push("/login");
  }

  return (
    <div className="">
      <div className="header">
        <p className="lead"> Welcome, {user}! </p>

        <button className="logout-button" onClick={() => LogoutHook(props)}>
          Logout
        </button>
      </div>

      <div className="todo-content-area">
        <TodoFeed
          todos={todos}
          updateHook={() => UpdateTodosHook()}
          deleteHook={() => DeleteTodosHook()}
          updateFeedHook={() => updateFeed()}
        />
      </div>

      <div className="create-button-canvas">
        <button className="create-button" onClick={() => setShowInputForm(!showInputForm)}>
          +
        </button>
      </div>

      {showInputForm &&
        <NewTodoForm
          closeHook={setShowInputForm}
          updateHook={() => updateFeed()}
        />}
    </div>
  );
};

export default HomePage;
