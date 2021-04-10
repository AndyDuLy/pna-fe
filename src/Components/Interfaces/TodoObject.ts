export default interface TodoObject {
  id: string,
  title: string,
  category: string,
  content: { done: boolean, content: string },
  colorCode: string,
}
