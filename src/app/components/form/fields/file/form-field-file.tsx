import React from "react";
import { WrappedFieldProps } from "redux-form";

interface IFileInputState {
    imgSrc: string;
}

interface IFileInputProps extends WrappedFieldProps {
    title: string;
    type: string;
    readOnly?: boolean;
}

export class FileInput extends React.Component<IFileInputProps, IFileInputState> {
    constructor(props: any) {
        super(props);
        this.state = {
            imgSrc: ""
        };
        this.onChange = this.onChange.bind(this);
    }

    public render(): JSX.Element {
        const { input: { value, name } } = this.props;

        return (
            <div className="input">
                <div className="form-field-file">
                    {this.state.imgSrc && <img className="form-field-file__image" src={this.state.imgSrc} />}
                    {this.renderPlaceholder()}
                    <input
                        readOnly={this.props.readOnly}
                        data-qa={name}
                        type="file"
                        onChange={this.onChange}
                    />
                </div>
                <label className="input__label">
                    <span className="input__label-content">{this.props.title}</span>
                </label>
            </div>

        );
    }

    private renderPlaceholder(): JSX.Element | null {
        if (!this.state.imgSrc) {
            return(
                <div className="form-field-file__placeholder">
                    <i className="fa fa-plus form-field-file__icon"/>
                </div>
            );
        }
        return(null);
    }


    private onChange(e: any): void {
        const { input: { onChange } } = this.props;
        let reader: FileReader = new FileReader();
        let url: void = reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = function (e: any): void {
            this.setState({
                imgSrc: [reader.result]
            });
        }.bind(this);
    }
}
