import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";
//COMPONENTS
import { TodoListContainer } from "./../containers/todo-list-container/todo-list-container";
import { TodoUpdateContainer } from "../containers/todo-update-container/todo-update-container";
import { TodoAddContainer } from "../containers/todo-add-container/todo-add-container";

class Main extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    public render(): JSX.Element {
        return (
            <Switch>
                <Route exact path="/" component={TodoListContainer} />
                <Route path="/new" component={TodoAddContainer}/>
                <Route path="/update/:id" component={TodoUpdateContainer}/>
            </Switch>
        );
    }
}
export const MainRouterOutlet: React.ComponentClass<{}> = withRouter(Main);
