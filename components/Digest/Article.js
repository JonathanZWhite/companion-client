import React, { Component, PropTypes } from 'react';
import '../../assets/sass/components/article.scss';

export default class Article extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {article } = this.props;
        return (
            <div className="article block block--item">
                <span className="txt--caption">{article.provider}</span>
                <a href={article.url}>
                    <p>{article.title}</p>
                </a>
            </div>
        );
    }
}

Article.propTypes = {
    article: PropTypes.object
};
