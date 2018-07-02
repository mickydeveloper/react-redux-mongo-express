import React, { Component } from "react";

export class ErrorBoundary extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  public componentDidCatch(error: any, info: any): void {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, info);
    console.info(error, info);
  }

  public render(): JSX.Element | any {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
