import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import { action } from '../config/Store';
import PropTypes from 'prop-types';
import NewsGrid from '../components/news/NewsGrid';

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
                <div className="content">
                    <NewsGrid articles={this.props.articles} />
                </div>
            </div>
        );
    }
}

App.propTypes = {
    articles: PropTypes.array,
};

App.defaultProps = {
    articles: [],
};

export default connect((store) => {
    return {
        articles: store.News.articles,
        loading: store.News.loading,
    };
})(App);
