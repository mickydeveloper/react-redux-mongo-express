import React from "react";
import { WrappedFieldProps } from "redux-form";

interface ITextareaProps extends WrappedFieldProps {
    title: string;
    type: string;
    required: boolean;
    unit?: string;
    disabled?: boolean;
    readOnly?: boolean;
}

export class Textarea extends React.Component<ITextareaProps, {}> {
    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        const { input: { value, name }, meta } = this.props;
        return (
            <div className={((meta.active || String(value)) ? "input input--active" : "input") + " form-field-textarea"}>
                <textarea
                readOnly={this.props.readOnly}
                data-qa={name} className={
                    ((meta.touched && meta.error) ? "input__field input__field--error" : "input__field") + ((this.props.unit) ? " form-field-textarea__input--unit" : " form-field-textarea__input")}
                    {...this.props.input} disabled={this.props.disabled}
                />
                <label className="input__label">
                    <span className="input__label-content">{this.props.title}</span>
                </label>
                {this.props.required && <span className="input__required">*</span>}
                {meta.touched && meta.error && <span className="input__error">{meta.error}</span>}
            </div>
        );
    }


}
