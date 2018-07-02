import { ITodo } from "../../actions/todos/todos.d";
import { RouteComponentProps } from "react-router-dom";

export interface ITodoFormProps extends RouteComponentProps<any> {
  id: string;
  currentTodo: ITodo;
  createTodo: (data: { text: string }) => Promise<ITodo>;
  updateTodo: (id: string, text: string) => Promise<ITodo>;
  setCurrentTodo: (id: string, text: string) => Function;
  handleSubmit: Function;
  valid: boolean;
}
export interface ITodoFormState {
  redirect: boolean;
  isUpdate: boolean;
}
