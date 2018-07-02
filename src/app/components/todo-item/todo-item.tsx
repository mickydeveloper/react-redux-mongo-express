import React from "react";
import { Link } from "react-router-dom";
import { ITodoProps } from "./todo-item.d";

export const TodoItem: React.StatelessComponent<ITodoProps> = (
  props: ITodoProps
) => {
  return (
    <div className="todo-item">
      <Link to={"/update/" + props.id} onClick={() => props.setCurrentTodo(props.id, props.text)}><h5>{props.text}</h5></Link>
      <i className="fa fa-trash-o" onClick={() => props.deleteTodo(props.id)}/>
    </div>
  );
};
