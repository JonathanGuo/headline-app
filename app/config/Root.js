import React from 'react';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from '../containers/App';
import { store, history } from './Store';

require('./Bootstrap');

const Root = () => {
    return (
        <MuiThemeProvider>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Route path="/" component={App} />
                </ConnectedRouter>
            </Provider>
        </MuiThemeProvider>
    );
};

export default Root;

