import React from 'react'

const Post = ({title, author, selftext}) => (
  <div>
  <div><strong>Title:</strong> {title}</div>
  <div><strong>Author: </strong>{author}</div>
  <div><strong>Text: </strong>{selftext}</div>
  <hr />
  </div>
)

export default Post
