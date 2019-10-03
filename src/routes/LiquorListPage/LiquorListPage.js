import React, { Component } from 'react'
import LiquorListContext from '../../contexts/LiquorListContext'
import LiquorApiService from '../../services/liquor-api-service'
import { Section } from '../../components/Utils/Utils'
import LiquorListItem from '../../components/LiquorListItem/LiquorListItem'
import './LiquorListPage.css'

export default class LiquorListPage extends Component {

  static contextType = LiquorListContext
 
  componentDidMount() {
    this.context.clearError()
    LiquorApiService.getLiquors()
      .then(this.context.setLiquorList)
      .catch(this.context.setError)
  }

  renderLiquors() {
    const { liquorList = [] } = this.context;
    return liquorList.map(liquor =>
      <LiquorListItem
        key={liquor.id}
        liquor={liquor}
      />
    )
  }

  render() {
    const { error } = this.context
    return (
      <Section list className='LiquorListPage'>   
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderLiquors()}
      </Section>
    )
  }
}
