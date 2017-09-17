import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import NewsGrid from '../components/news/NewsGrid';
import Modal from '../components/Modal';

class App extends PureComponent {
    constructor (props) {
        super(props);

        this.state = {
            errorMessage: '',
        };
    }

    componentWillReceiveProps (nextProps) {
        // Set error message if fails to load either source or news
        if (nextProps.loadSourceFailed || nextProps.loadNewsFailed) {
            const errorMessage = <p>Failed to load {nextProps.loadSourceFailed ? 'sources' : 'news'}.Please try again later.</p>;
            this.setState({ errorMessage });
        }
    }

    render () {
        return (
            <div>
                <div className="content">
                    <Modal
                        message={this.state.errorMessage}
                        open={!isEmpty(this.state.errorMessage)}
                        onRequestClose={() => this.setState({ errorMessage: '' })}
                    />
                    <h2>Source: {this.props.currentSource ? this.props.currentSource.name : 'No source is selected'} </h2>
                    {this.props.currentSource ? <p>this.props.currentSource.description</p> : null }
                    <NewsGrid
                        articles={this.props.news}
                        loading={this.props.loadingSources || this.props.loadingNews}
                    />
                </div>
            </div>
        );
    }
}

App.propTypes = {
    news: PropTypes.array,
    loadingSources: PropTypes.bool.isRequired,
    loadingNews: PropTypes.bool.isRequired,
    loadSourceFailed: PropTypes.bool.isRequired,
    loadNewsFailed: PropTypes.bool.isRequired,
    currentSource: PropTypes.object,
};

App.defaultProps = {
    news: [],
    currentSource: null,
};

export default connect((store) => {
    return {
        sources: store.Sources.sources,
        loadingSources: store.Sources.loading,
        news: store.News.articles,
        loadingNews: store.News.loading,
        loadSourceFailed: store.Sources.failed,
        loadNewsFailed: store.News.failed,
        currentSource: store.News.source,
    };
})(App);
