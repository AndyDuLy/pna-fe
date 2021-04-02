import React, { useState } from 'react'
import "./UIOverhaul.css";

import Child from "./Child";


const UIOverhaul: React.FC = () => {
  const [theme, setTheme] = useState("light");

  return (
    <Child theme={theme} themeSwitchHook={() => setTheme(theme === "light" ? "dark" : "light")}/>
  )
}

export default UIOverhaul;
