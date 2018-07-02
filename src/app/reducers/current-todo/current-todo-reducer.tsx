import { ITodo } from "../../actions/todos/todos.d";
import { Reducer } from "redux";
import { ACTION_TYPE } from "../../actions/actions";

export const currentTodoReducer: Reducer<ITodo | undefined> = function(
  state: ITodo = { id: "", text: "" },
  action: any
): ITodo | undefined {
  switch (action.type) {
    case ACTION_TYPE.TODO.CURRENT:
      return { ...action.todo };
    default:
      return state;
  }
};
