export default interface TodoObject {
  id: string,
  title: string,
  category: string,
  todos: { done: boolean, content: string }[],
  colorCode: string,
}
