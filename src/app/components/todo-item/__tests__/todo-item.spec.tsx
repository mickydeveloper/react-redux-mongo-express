import * as React from "react";
import { shallow, mount } from "enzyme";
import { TodoItem } from "../todo-item";
import { deleteTodo, setCurrentTodo } from "../../../actions/todos/todos-action";

describe("testing <TodoItem>", () => {
    it("the snapshot should match", () => {
        const todo = {
            id: "868et8gdf8g8sdg",
            text: "This is just a test"
        };
        const result = shallow(<TodoItem id={todo.id} text={todo.text} deleteTodo={deleteTodo} setCurrentTodo={setCurrentTodo}/>);
        expect(result).toMatchSnapshot();
    });
});