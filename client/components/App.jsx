import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import LoadArticle from './LoadArticle'
import ArticleList from './ArticleList'

const App = () => (
  <div className='app'>
    <ErrorMessage />
    <LoadSubreddit />
    <WaitIndicator />
    <SubredditList />
    <LoadArticle /> 
    <ArticleList />
  </div>
)

export default App
