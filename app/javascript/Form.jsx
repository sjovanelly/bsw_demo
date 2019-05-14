import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
      super(props)
      const post = props.post || {}
      this.state = {
        title: post.title || '',
        content: post.content || ''
      }
    }
    handleInputChange = (event) => {
      this.setState({[event.target.name]: event.target.value})
    }
    handleSubmit = (event) => {
      event.preventDefault()
      var url = '/posts'
      if (this.props.post) {
        url = url + `/${this.props.post._id.$oid}`
      }
      fetch(url, {
        method: this.props.post?'PATCH':'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          post: {
            title: this.state.title,
            content: this.state.content
          }
        })
      }).then(resp => resp.json()
      ).then(data => {
        this.setState({title: '', content: ''})
        this.props.getAllPosts()
        if (this.props.switchEdit) this.props.switchEdit()
      }).catch(error => console.error('error is', error))
    }
     render () {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='title'
            placeholder='Title'
            value={this.state.title}
            onChange={this.handleInputChange}
          />
          <textarea
            name='content'
            placeholder='Write blog content here....'
            cols={100}
            rows={10}
            value={this.state.content}
            onChange={this.handleInputChange}
          />
          <button type='submit'>Save</button>
        </form>
      )
    }
}
