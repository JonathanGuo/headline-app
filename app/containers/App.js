import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import { action } from '../config/Store';
import PropTypes from 'prop-types';

class App extends Component {
    componentDidMount () {
        action('FETCH_NEWS_ASYNC');
    }

    render () {
        return (
            <div>
                <AppBar
                    title="Headline"
                    iconElementRight={<FlatButton label="Author" />}
                />
                News: { this.props.news.length }
            </div>
        );
    }
}

App.propTypes = {
    news: PropTypes.object,
};

App.defaultProps = {
    news: [],
};

export default connect((store) => {
    return { news: store.News };
})(App);
