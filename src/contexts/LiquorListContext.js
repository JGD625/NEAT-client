import React, { Component } from 'react'

const LiquorListContext = React.createContext({
  liquorList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setLiquorList: () => {},
})
export default LiquorListContext

export class LiquorListProvider extends Component {
  state = {
    liquorList: [],
    error: null,
  };

  setLiquorList = liquorList => {
    this.setState({ liquorList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      liquorList: this.state.liquorList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setLiquorList: this.setLiquorList,
    }
    return (
      <LiquorListContext.Provider value={value}>
        {this.props.children}
      </LiquorListContext.Provider>
    )
  }
}