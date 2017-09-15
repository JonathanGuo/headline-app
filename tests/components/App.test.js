/* global expect */

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route } from 'react-router-dom';
import { shallow } from 'enzyme';
import Root from '../../app/config/Root';
import App from '../../app/containers/App';

describe('App Component', () => {
    let wrapper;
    let appPathMap;

    beforeEach(() => {
        wrapper = shallow(<Root />);

        const routeComponent = wrapper.find(MuiThemeProvider)
            .dive()
            .find(Route);

        appPathMap = routeComponent.reduce((pathMap, route) => {
            const routeProps = route.props();
            return {
                ...pathMap,
                [routeProps.path]: routeProps.component,
            };
        }, {});
    });

    test('App component is intialised', () => {
        expect(appPathMap['/']).toBe(App);
    });
});
