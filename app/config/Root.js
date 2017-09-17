import React from 'react';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { store, history } from './Store';
import { muiTheme } from './Theme';
import App from '../containers/App';

const Root = () => {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div>
                        <Route exact path="/" component={App} />
                    </div>
                </ConnectedRouter>
            </Provider>
        </MuiThemeProvider>
    );
};

export default Root;

