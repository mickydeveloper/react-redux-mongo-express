import React from "react";
import { connect } from "react-redux";
import { TodoForm } from "../../components/todo-form/todo-form";
import {
  createTodo,
  updateTodo,
  setCurrentTodo
} from "../../actions/todos/todos-action";
import { ITodo } from "../../actions/todos/todos.d";

export const TodoFormConnect: React.StatelessComponent<any> = props => (
  <TodoForm {...props} />
);

function mapStateToProps({
  currentTodo
}: {
  currentTodo: ITodo;
}): { initialValues: { text: string } } | Object {
  return currentTodo.id !== ""
    ? {
        initialValues: { text: currentTodo.text }
      }
    : {};
}

export const TodoFormContainer: React.ComponentClass<{}> = connect(
  mapStateToProps,
  {
    createTodo,
    updateTodo,
    setCurrentTodo
  }
)(TodoFormConnect);
