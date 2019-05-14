import React, { Component } from 'react'

export default class DeleteLink extends Component {
  deletePost = () => {
    fetch(`/posts/${this.props.post._id.$oid}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      }).then(resp => resp.json()
    ).then(data => {
      this.props.getAllPosts()
    }).catch(error => console.error('error is', error))
  }
  render() {
    return (
      <span class='link' onClick={this.deletePost}>Delete Post</span>
    )
  }
}
