import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

class LoadSubreddit extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      subreddit: ''
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
      <input onChange={this.handleChange} type="text" name="subreddit" placeholder="Subreddit"/>
      <button onClick={() => this.props.dispatch(fetchPosts(this.state.subreddit))}>
        Fetch Posts
      </button>
      </div>
  }
}
export default connect()(LoadSubreddit)
