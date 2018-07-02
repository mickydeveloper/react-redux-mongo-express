import React, { Component, SyntheticEvent } from "react";
//import { FormEvent } from "redux-form";

interface IButtonStandardProps {
    text: string;
    className?: string;
    type?: string;
    callback?: (e: SyntheticEvent<HTMLButtonElement>) => any;
    onClick?: any;
    qa?: string;
    valid?: boolean;
    disabled?: boolean;
}

export class ButtonStandard extends Component<IButtonStandardProps> {
    constructor(props: IButtonStandardProps) {
        super(props);
        this.buttonClick = this.buttonClick.bind(this);
    }

    public render(): JSX.Element {
        const { type, text, className, qa, valid } = this.props;
        const cssClass: string = (className) ? className : "";
        return (
            <button
                data-qa={qa && qa}
                onClick={this.buttonClick}
                className={(type === "simple") ? "button secondary " + cssClass : "button " + cssClass}
                disabled={!valid || this.props.disabled}
            >
                {text}
            </button>
        );
    }

    private buttonClick(e: SyntheticEvent<HTMLButtonElement>): void {
        e.preventDefault();
        if (this.props.callback) {
            this.props.callback(e);
        }
    }
}
