import { ITodo } from "./../../actions/todos/todos.d";
export interface ITodoListProps {
  todos: ITodo[];
  getTodos: () => Promise<ITodo[]>;
  deleteTodo: (id: number) => Promise<any>;
  setCurrentTodo: (id:number, text:string) => Function;
}
