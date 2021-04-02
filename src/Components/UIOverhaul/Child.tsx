import React from 'react'
import "./UIOverhaul.css";


interface Props {
  theme: string,
  themeSwitchHook: () => void,
}

const Child: React.FC<Props> = (props) => {
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

  return (
    <div className={`${theme}-container container`}>
      <div className="top-bar">
        <div>
          <h3 className={`${theme}-date-text current-date`}> {date.toDateString()} </h3>
        </div>

        <div />

        <div className="theme-button-container">
          <button onClick={() => props.themeSwitchHook()}> Theme </button>
        </div>
      </div>

      <h1 className={`${theme}-text greeting`}>
        {greetingsByDay[todayNumerical]}
        <span className={`${theme}-primary-color`}> {todayName}! </span>
      </h1>

    </div>
  )
}

export default Child;
