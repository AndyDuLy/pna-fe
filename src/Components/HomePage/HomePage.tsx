import React from "react";

import { RouteComponentProps } from "react-router-dom";

interface Props {
  history: RouteComponentProps['history'],
  theme: String,
}

const HomePage: React.FC<Props> = (props) => {


  

  if (!localStorage.getItem("token")) {
    props.history.push("/login");
  }

  return (
    <div className="">

    </div>
  );
};

export default HomePage;
