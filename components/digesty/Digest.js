import React, { Component, PropTypes } from 'react';
import Article from './Article';

export default class Digest extends Component {
    constructor(props) {
        super(props);
    }

    _renderArticles() {
        const { articles } = this.props;
        return articles.map((article) => {
            return <Article
                key={article.title}
                article={article}/>
        });
    }

    render() {
        const { articles } = this.props;
        return (
            <div>
                <section className="digest grd-container">
                    <div className="block block--preview">
                        <h3 className="head--h3">Daily Companion Digest</h3>
                        <p className="txt--p txt-after--h3">Hey Jonathan! Here's what's going on in the world today...</p>
                    </div>
                    <div className="articles">
                        {this._renderArticles()}
                    </div>
                </section>
            </div>
        );
    }
}

Digest.propTypes = {
    articles: PropTypes.array
};
