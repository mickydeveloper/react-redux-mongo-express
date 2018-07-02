//VENDOR
import { combineReducers, Reducer } from "redux";
//Redux form reducer
import { reducer as ReduxFormReducer } from "redux-form";
//REDUCERS
import { todosReducer } from "./todos/todos-reducer";

//INTERFACES
import { IReducers } from "./index.d";
import { currentTodoReducer } from "./current-todo/current-todo-reducer";

export const reducers: IReducers = {
    todos: todosReducer,
    currentTodo: currentTodoReducer,
    form: ReduxFormReducer
};

