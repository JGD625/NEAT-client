import React, { Component } from 'react'

export const nullLiquor = {
  brand: {},
  tags: [],
}

const LiquorContext = React.createContext({
  liquor: nullLiquor,
  comments: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setLiquor: () => {},
  clearLiquor: () => {},
  setComments: () => {},
  addComment: () => {},
})

export default LiquorContext

export class LiquorProvider extends Component {
  state = {
    liquor: nullLiquor,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setLiquor = liquor => {
    this.setState({ liquor })
  }

  setComments = comments => {
    this.setState({ comments })
  }

  clearLiquor = () => {
    this.setLiquor(nullLiquor)
    this.setComments([])
  }

  addComment = comment => {
    this.setComments([
      ...this.state.comments,
      comment
    ])
  }

  render() {
    const value = {
      liquor: this.state.liquor,
      comments: this.state.comments,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setLiquor: this.setLiquor,
      setComments: this.setComments,
      clearLiquor: this.clearLiquor,
      addComment: this.addComment,
    }
    return (
      <LiquorContext.Provider value={value}>
        {this.props.children}
      </LiquorContext.Provider>
    )
  }
}