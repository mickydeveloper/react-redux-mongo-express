import React from "react";
import { WrappedFieldProps } from "redux-form";

interface IImageInputState {
    imgSrc: string;
}

interface IImageInputProps {
    title: string;
    image: string;
    type: string;
}

export class ImageInput extends React.Component<IImageInputProps & WrappedFieldProps & any, any> {
    constructor(props: IImageInputProps | any) {
        super(props);
        this.state = {
            imgSrc: (this.props.image) ? "/" + this.props.image : ""
        };
        this.changeImage = this.changeImage.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
    }

    public render(): JSX.Element {
        const { input: { value, name, onChange, onBlur, ...inputProps } } = this.props;
        return (
            <div className="input">
                <div className="form-field-image">
                    {this.state.imgSrc && <img className="form-field-file__image" src={this.state.imgSrc} />}
                    {this.renderPlaceholder()}
                    <input
                        onChange={this.onFileChange(onChange)}
                        onBlur={this.onFileChange(onBlur)}
                        type="file"
                        accept="image/*"
                        {...inputProps}
                        {...this.props}
                        disabled={this.props.readOnly}
                    />
                    {this.renderLabel()}
                </div>
            </div>
        );
    }

    private onFileChange(delegate: any): any {
        return (e: any): void => {
            let file: any = e.target.files[0];
            if (file) {
                this.changeImage(file);
                return delegate(file);
            }
        };
    }

    private renderLabel(): JSX.Element | null {
        if (!this.state.imgSrc) {
            return(
                <label className="input__label">
                    <span className="input__label-content">{this.props.title}</span>
                </label>
            );
        }
        return(null);
    }

    private renderPlaceholder(): JSX.Element | null {
        const baseClass: string = "form-field-image__placeholder";
        if (!this.state.imgSrc) {
            return(
                <div className={ + (this.props.readOnly) ? baseClass + " form-field-image__placeholder--readonly" : baseClass}>
                    <i className="fa fa-plus form-field-image__icon"/>
                </div>
            );
        }
        return(null);
    }


    private changeImage(file: any): void {
        let reader: FileReader = new FileReader();
        let url: void = reader.readAsDataURL(file);
        reader.onloadend = function (e: any): void {
            this.setState({
                imgSrc: [reader.result]
            });
        }.bind(this);
    }
}

