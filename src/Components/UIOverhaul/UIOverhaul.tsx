import React, { useState } from 'react'
import { RouteComponentProps } from "react-router-dom";
import "./UIOverhaul.css";

import Child from "./Child";


interface Props {
  history: RouteComponentProps['history'],
}

const UIOverhaul: React.FC<Props> = (props) => {
  const [theme, setTheme] = useState("light");

  return (
    <Child history={props.history} theme={theme} themeSwitchHook={() => setTheme(theme === "light" ? "dark" : "light")}/>
  )
}

export default UIOverhaul;
