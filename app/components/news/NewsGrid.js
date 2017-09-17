import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import CircularProgress from 'material-ui/CircularProgress';

class NewsGrid extends PureComponent {
    render () {
        const { articles, loading } = this.props;

        if (loading) {
            return (
                <div style={{ textAlign: 'center' }}>
                    <CircularProgress size={60} />
                </div>
            );
        }

        if (articles.length === 0) {
            return null;
        }

        return (
            <div className="content">
                {
                    articles.map((article, idx) => (
                        <NewsItem key={idx} article={article} />
                    ))
                }
            </div>
        );
    }
}

NewsGrid.propTypes = {
    articles: PropTypes.array,
    loading: PropTypes.bool,
};

NewsGrid.defaultProps = {
    articles: [],
    loading: false,
};

export default NewsGrid;
