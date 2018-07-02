import React from "react";
import { Link } from "react-router-dom";
import { ITodoListProps } from "../../containers/todo-list-container/todo-list-container.d";
import { TodoItem } from "../todo-item/todo-item";
import { STRINGS } from "../../utils/constants/strings";

export default class TodoList extends React.Component<ITodoListProps, {}> {
  constructor(props: ITodoListProps) {
    super(props);

    this.renderListItems = this.renderListItems.bind(this);
  }

  public componentDidMount(): void {
    this.props.getTodos();
  }

  public render(): JSX.Element {
    return (
      <div className="todo-list">
          <h1>{STRINGS.TODOLIST.HEADING}</h1>
          {this.renderListItems()}
          <Link className="add-button" to="/new">+</Link>
      </div>
    );
  }

  private renderListItems(): JSX.Element {
    let todoList: JSX.Element[] = this.props.todos.map((todo, index) => (
      <TodoItem key={index} id={todo.id} text={todo.text} deleteTodo={this.props.deleteTodo} setCurrentTodo={this.props.setCurrentTodo}/>
    ));
    return <div className="todo-list">{todoList}</div>;
  }
}
