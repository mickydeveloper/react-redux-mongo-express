import * as React from "react";
import { shallow } from "enzyme";
import { TodoForm } from "../todo-form";

describe("testing <TodoForm>", () => {
    it("the snapshot should match", () => {
        const result = shallow(<TodoForm />);
        expect(result).toMatchSnapshot();
    });
});