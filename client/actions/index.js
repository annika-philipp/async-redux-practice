import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const REQUEST_ARTICLES = 'REQUEST_ARTICLES'
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES'

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts: posts.map(post => post.data)
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function fetchPosts (subreddit) {
  return (dispatch) => {
    dispatch(requestPosts())
    return request
      .get(`/api/v1/reddit/subreddit/${subreddit}`)
      .then(res => {
        dispatch(receivePosts(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

export const requestArticles = () => {
  return {
    type: REQUEST_ARTICLES
  }
}

export const receiveArticles = (articles) => {
  return {
    type: RECEIVE_ARTICLES,
    articles: articles.map(article => article.data)
  }
}

export function fetchArticles (articles) {
  console.log("ARTICLES from index.actions ", articles)
  return (dispatch) => {
    dispatch(requestArticles())
    return request
      .get(`/api/v1/guardian/${articles}`)
      .then(res=> {
        dispatch(receiveArticles(res.body))
      })
      .catch(err=> {
        dispatch(showError(err.message))
      })
  }
}