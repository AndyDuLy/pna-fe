const endpoint: string = `https://rocky-shore-14548.herokuapp.com`;
//const endpoint: string = `http://localhost:5000`;

export const endpoints = {
  login: `${endpoint}/auth/login`,
  register: `${endpoint}/auth/signup`,
  getTodos: `${endpoint}/todos/getTodo`,
  getUser: `${endpoint}/auth/user`,
  createTodo: `${endpoint}/todos/newTodo`,
  updateTodo: `${endpoint}/todos/updateTodo`,
  deleteTodo: `${endpoint}/todos/deleteTodo`,
}
