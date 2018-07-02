import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { ErrorBoundary } from './components/error-boundary/error-boundary';
import { ACTION_TYPE } from './actions/actions';
import Layout from './layout/layout';
import './../styles/main.scss';
import { store, persistor } from './store';

declare var module: { hot: any };
declare var process: {
  env: {
    NODE_ENV: string
  }
};

const App: any = Component => {
  ReactDOM.render(
    <ErrorBoundary>
      <Provider store={store}>
        <AppContainer>
          <Layout />
        </AppContainer>
      </Provider>
    </ErrorBoundary>,
    document.getElementById('app-container')
  );
};

App(Layout);

//If HRM is enabled replace Layout container - only dev mode
if (module.hot && process.env.NODE_ENV === 'local') {
  module.hot.accept("./layout/layout", () => { App("./layout/layout"); } );
}
