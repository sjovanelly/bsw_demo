import React, { Component } from 'react'
import DeleteLink from 'DeleteLink'
import Form from 'Form'
export default class Post extends Component {
  state = {
    showEdit: false
  }
  switchEdit = () => {
    this.setState({showEdit: !this.state.showEdit})
  }
  render() {
    const {post, getAllPosts} = this.props
    return (
      <div>
        {this.state.showEdit ?
          <div>
            <Form post={post} getAllPosts={getAllPosts} switchEdit={this.switchEdit} />
            <span className='link' onClick={this.switchEdit}>Cancel Edit</span>
          </div>
        :
          <div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <span className='link' onClick={this.switchEdit}>Edit</span>&nbsp;|&nbsp;
            <DeleteLink post={post} getAllPosts={getAllPosts} />
            <hr/>
          </div>
        }

      </div>
    )
  }
}
