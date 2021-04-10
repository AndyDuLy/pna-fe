import React, { useEffect, useContext } from 'react'
import { RouteComponentProps } from "react-router-dom";
import "./UIOverhaul.css";

import ThemeToggleLight from "../../Assets/theme-toggle-light.png";
import ThemeToggleDark from "../../Assets/theme-toggle-dark.png";
import NewTodoLight from "../../Assets/add-button-light.png";
import NewTodoDark from "../../Assets/add-button-dark.png";

import { NewTodoForm } from "../Reusable/NewTodoForm/NewTodoForm";
import { TodoFeed } from "../Reusable/ToDoFeed/ToDoFeed";

import { TodosContext } from "../Context/TodosContext";
import { GetUserHook } from "../../Hooks/GetUserHook";
import { LogoutHook } from '../Logout/LogoutHook';


interface Props {
  theme: string,
  themeSwitchHook: () => void,
  history: RouteComponentProps['history'],
}

const Child: React.FC<Props> = (props) => {
  const [showNewForm, setNewForm] = React.useState(false);

  const todoContext = useContext(TodosContext);
  const theme = props.theme;

  const date = new Date();
  const todayNumerical = date.getDay();
  const todayName = date.toLocaleString("default", { weekday: "long"});

  const greetingsByDay = [
    "Hope you had a relaxing ",
    "Let's make this a great ",
    "Keep it up, it's ",
    "Push through, it's ",
    "Almost there! It's ",
    "Thank god, it's finally ",
    "At last, it's ",
  ]

  useEffect(() => {
    const fetchData = async () => {
      const res = await GetUserHook();

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
    <>
      <button onClick={() => LogoutHook(props)}> Logout </button>

      <div className={`${theme}-container container`}>
        <div className="top-bar">
          <div>
            <h3 className={`${theme}-date-text current-date WorkSansLight`}> {date.toDateString()} </h3>
          </div>

          <div />

          <div className="theme-button-container">
            <div onClick={() => props.themeSwitchHook()}>
              {theme === "light"
                ? <img src={ThemeToggleLight} alt="Theme Toggle" />
                : <img src={ThemeToggleDark} alt="Theme Toggle" />
              }
            </div>
          </div>
        </div>

        <h1 className={`${theme}-text greeting WorkSansSemiBold`}>
          {greetingsByDay[todayNumerical]}
          <span className={`${theme}-primary-color`}> {todayName}! </span>
        </h1>

        <TodoFeed theme={theme} />
    
        <div className="persistent-add-button">
          {theme === "light"
            ? <img
                onClick={() => setNewForm(!showNewForm)}
                src={NewTodoLight}
                alt="New Todo"
                />
            : <img
                onClick={() => setNewForm(!showNewForm)}
                src={NewTodoDark}
                alt="New Todo"
              />
          }
        </div>
      </div>

      {showNewForm &&
        <NewTodoForm closeHook={() => setNewForm(false)} theme={theme} />
      }
    </>
  )
}

export default Child;
