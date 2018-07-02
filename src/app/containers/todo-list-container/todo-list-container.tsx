import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { STRINGS } from "./../../utils/constants/strings";
//ACTIONS
import {
  getTodos,
  deleteTodo,
  setCurrentTodo
} from "./../../actions/todos/todos-action";
//INTERFACES
import { ITodoListProps } from "./todo-list-container.d";
import { ITodo } from "./../../actions/todos/todos.d";
//COMPONENTS
import { TodoItem } from "./../../components/todo-item/todo-item";
import TodoList from "../../components/todo-list/todo-list";

const TodoListConnect: React.StatelessComponent<ITodoListProps> = props => (
  <TodoList {...props} />
);

function mapStateToProps({ todos }: { todos: ITodo[] }): any {
  return {
    todos
  };
}

export const TodoListContainer: React.ComponentClass<{}> = connect(
  mapStateToProps,
  { getTodos, deleteTodo, setCurrentTodo }
)(TodoListConnect);
