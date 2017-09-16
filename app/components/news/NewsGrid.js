import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';

class NewsGrid extends PureComponent {
    render () {
        const { articles } = this.props;

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
};

NewsGrid.defaultProps = {
    articles: [],
};

export default NewsGrid;
