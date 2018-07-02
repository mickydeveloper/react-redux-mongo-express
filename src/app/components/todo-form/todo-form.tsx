import React from "react";
import { Redirect, Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { ITodoFormProps, ITodoFormState } from "./todo-form.d";
import { required } from "../../utils/validators/required";
import { STRINGS } from "../../utils/constants/strings";
import { ButtonStandard } from "../form/buttons/standard/buttons-standard";
import { TextInput } from "../form/fields/text/form-field-text";
import { ITodo } from "../../actions/todos/todos.d";

class TodoFormComponent extends React.Component<
  ITodoFormProps,
  ITodoFormState
> {
  constructor(props: any) {
    super(props);

    this.state = {
      redirect: false,
      isUpdate: props.match.path === "/update/:id"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  public render(): JSX.Element {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    const { handleSubmit, valid } = this.props;
    return (
      <div>
        <h1>
          {this.state.isUpdate
            ? STRINGS.FORM.HEADING.UPDATE
            : STRINGS.FORM.HEADING.CREATE}
        </h1>
        <form data-qa="new-todo" onSubmit={handleSubmit(this.handleSubmit)}>
          <Field
            title={STRINGS.FORM.TEXT}
            component={TextInput}
            name="text"
            type="text"
            required={true}
            validate={required}
          />
          <ButtonStandard
            type="simple"
            text={STRINGS.BUTTONS.CANCEL}
            callback={this.handleCancel}
            valid={true}
          />
          <ButtonStandard
            className="button float-right create"
            text={
              this.state.isUpdate ? STRINGS.FORM.UPDATE : STRINGS.FORM.CREATE
            }
            callback={handleSubmit(this.handleSubmit)}
            valid={valid}
          />
        </form>
      </div>
    );
  }

  private handleSubmit(data: { text: string }): void {
    if (!this.state.isUpdate) {
      this.props.createTodo(data).then(() => this.setState({ redirect: true }));
    } else {
      this.props.updateTodo(this.props.match.params.id, data.text).then(() => {
        this.setState({ redirect: true });
        this.props.setCurrentTodo("", "");
      });
    }
  }

  private handleCancel(): void {
    this.setState({
      redirect: true
    });
    if (this.state.isUpdate) {
      this.props.setCurrentTodo("", "");
    }
  }
}

export const TodoForm: React.ComponentClass<{}> = reduxForm<any, any>({
  form: "new-todo",
  destroyOnUnmount: true
})(TodoFormComponent);
