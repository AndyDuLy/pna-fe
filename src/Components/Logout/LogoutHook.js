export const LogoutHook = (props) => {
  localStorage.removeItem("token");
  props.history.push("/login");
};
