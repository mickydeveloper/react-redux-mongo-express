import { Reducer, ReducersMapObject } from "redux";
import { ITodo } from "./../actions/todos/todos.d";

export interface IReducers extends ReducersMapObject {
  todos: Reducer<ITodo[] | undefined>;
  currentTodo: Reducer<ITodo | undefined>;
}
