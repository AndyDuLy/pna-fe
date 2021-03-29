import { RouteComponentProps } from "react-router-dom";

interface Props {
  history: RouteComponentProps['history'],
}

export const LogoutHook = (props: Props) => {
  localStorage.removeItem("token");
  props.history.push("/login");
};
