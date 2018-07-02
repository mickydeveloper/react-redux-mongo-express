import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
//CONTAINERS
import { MainRouterOutlet } from "./main-router-outlet";
import { ToastContainer, style, toast } from "react-toastify";
//COMPONENTS
import { ErrorBoundary } from "./../components/error-boundary/error-boundary";

export default class Layout extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  public render(): JSX.Element {
    return (
      <BrowserRouter>
        <ErrorBoundary>
          <div className="layout">
            <div className="grid-x grid-padding-x">
              <div className="small-12 cell">
                <MainRouterOutlet />
                <ToastContainer
                  autoClose={3500}
                  position={toast.POSITION.BOTTOM_CENTER}
                />
              </div>
            </div>
          </div>
        </ErrorBoundary>
      </BrowserRouter>
    );
  }
}
