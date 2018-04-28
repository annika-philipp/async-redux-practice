import React from 'react'
import {connect} from 'react-redux'
import {fetchArticles} from '../actions'

class LoadArticle extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      articles: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render () {
    return <div>
      <input onChange={this.handleChange} type="text" name="articles" placeholder="Articles"/>
      <button onClick={() => this.props.dispatch(fetchArticles(this.state.articles))}>
        Fetch Articles
      </button>
      </div>
  }
}
export default connect()(LoadArticle)