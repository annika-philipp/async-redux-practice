import React from 'react'
import {connect} from 'react-redux'

import Article from './Article'

const ArticleList = ({articles}) => (
    <div>
        {articles.map((article, id) => 
        <Article
        key={id}
        title={article.webTitle}
        />
    )}
    </div>
)

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(ArticleList)