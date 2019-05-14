import React, { Component } from 'react'
import Post from 'Post'
import Form from 'Form'

export default class Blog extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    this.getAllPosts()
  }
  getAllPosts = () => {
    fetch('/posts', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      }).then(resp => resp.json()
    ).then(data => {
      this.setState({posts: data})
    }).catch(error => console.error('error is', error))
  }
  render() {
    const {posts} = this.state
    return (
      <div>
        <h1>BSW Blog 2019</h1>
        <h2>Add Post</h2>
        <Form getAllPosts={this.getAllPosts} />
        <h2>Posts</h2>
        {posts.map((post, key) => (
          <Post post={post} key={key} getAllPosts={this.getAllPosts} />
        ))}
      </div>
    )
  }
}
