import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import moment from 'moment';
import Constatns from '../../config/Constants';

const defaultAvatar = <Avatar icon={<FontIcon className="material-icons">perm_identity</FontIcon>} />;

class NewsItem extends PureComponent {
    render () {
        const { article } = this.props;

        const link = <a className="news-link" href={article.url} target="_blank">{article.title}</a>;

        return (
            <Card className="news-item">
                <CardHeader
                    title={article.author || 'Anonymous'}
                    subtitle={`Published on ${moment(article.publishedAt).format(Constatns.datetime.format)}`}
                    avatar={defaultAvatar}
                />
                {
                    article.urlToImage
                        ? <CardMedia
                            className="news-item-media"
                            overlay={<CardTitle title={link} subtitle={article.description} />}
                        >
                            <img src={article.urlToImage} alt={article.title} />
                        </CardMedia>
                        : <CardText>
                            <CardTitle title={link} subtitle={article.description} />
                        </CardText>
                }
            </Card>
        );
    }
}

NewsItem.propTypes = {
    article: PropTypes.object.isRequired,
};

export default NewsItem;
