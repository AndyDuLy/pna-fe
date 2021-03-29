import React, { useEffect, useState, useContext } from "react";

import { RouteComponentProps } from "react-router-dom";

import { TodosContext } from "../Context/TodosContext";
import { TodoFeed } from '../Reusable/ToDoFeed/ToDoFeed';
import { NewTodoForm } from '../Reusable/NewTodoForm/NewTodoForm';

import { GetUserHook } from "./GetUserHook";
import { LogoutHook } from "../Logout/LogoutHook";


interface Props {
  history: RouteComponentProps['history'],
}

const HomePage: React.FC<Props> = (props) => {
  const [user, setUser] = useState(null);
  const [showInputForm, setShowInputForm] = useState(false);

  const todoContext = useContext(TodosContext);
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await GetUserHook();
      setUser(res.data.name);

      todoContext.dispatch({
        type: "POPULATE_TODO",
        payload: res.data.todos,
      });
    }
    
    fetchData(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <TodoFeed />
      </div>

      <div className="create-button-canvas">
        <button className="create-button" onClick={() => setShowInputForm(!showInputForm)}>
          +
        </button>
      </div>

      {showInputForm && <NewTodoForm closeHook={setShowInputForm}/>}
    </div>
  );
};

export default HomePage;
