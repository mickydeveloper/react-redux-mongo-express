import { ACTION_TYPE } from "../../actions/actions";
import { Reducer } from "redux";
import { ITodo } from "../../actions/todos/todos.d";

export const todosReducer: Reducer<ITodo[] | undefined> = function(
  state: ITodo[] = [],
  action: any
): ITodo[] | undefined {
  switch (action.type) {
    case ACTION_TYPE.TODO.GET:
      return [...action.todos];
    case ACTION_TYPE.TODO.DELETE:
      return state.filter(todo => todo.id !== action.id);
  }
  return state;
};
