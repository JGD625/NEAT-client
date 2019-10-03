import React, { Component } from 'react'

export const nullLiquor = {
  liquor: {},
  reviews: [],
}

const LiquorContext = React.createContext({
  liquor: nullLiquor,
  reviews: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setLiquor: () => {},
  clearLiquor: () => {},
  setReviews: () => {},
  addReview: () => {},
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

  setReviews = reviews => {
    this.setState({ reviews })
  }

  clearLiquor = () => {
    this.setLiquor(nullLiquor)
    this.setReviews([])
  }

  addReview = review => {
    this.setReviews([
      ...this.state.reviews,
      review
    ])
  }

  render() {
    const value = {
      liquor: this.state.liquor,
      reviews: this.state.reviews,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setLiquor: this.setLiquor,
      setReviews: this.setReviews,
      clearLiquor: this.clearLiquor,
      addReview: this.addReview,
    }
    return (
      <LiquorContext.Provider value={value}>
        {this.props.children}
      </LiquorContext.Provider>
    )
  }
}
