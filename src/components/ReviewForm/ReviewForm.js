import React, { Component } from 'react'
import LiquorContext from '../../contexts/LiquorContext'
import LiquorApiService from '../../services/liquor-api-service'
import { Button, Textarea } from '../Utils/Utils'
import './ReviewForm.css'

export default class ReviewForm extends Component {
  static contextType = LiquorContext

  handleSubmit = ev => {
    ev.preventDefault()
    const { liquor } = this.context
    const { text, rating } = ev.target

    LiquorApiService.postReview(liquor.id, text.value, Number(rating.value))
      .then(this.context.addReview)
      .then(() => {
        text.value = ''
      })
      .catch(this.context.setError)
  }

  render() {
    
    return (
      <form
        className='ReviewForm'
        onSubmit={this.handleSubmit}
      >
        <div className='text'>
          <Textarea
            required
            aria-label='Type a review...'
            name='text'
            id='text'
            cols='30'
            rows='3'
            placeholder='Type a review..'>
          </Textarea>
        </div>

        <div className='select'>
          <label htmlFor='rating'>Rate this liquor!</label>
          <select
            required
            aria-label='Rate this thing!'
            name='rating'
            id='rating'
          >
            <option value='1'>&#9733;&#9734;&#9734;&#9734;&#9734;</option>
            <option value='2'>&#9733;&#9733;&#9734;&#9734;&#9734;</option>
            <option value='3'>&#9733;&#9733;&#9733;&#9734;&#9734;</option>
            <option value='4'>&#9733;&#9733;&#9733;&#9733;&#9734;</option>
            <option value='5'>&#9733;&#9733;&#9733;&#9733;&#9733;</option>
          </select>
        </div>

        <Button type='submit'>
          Post review
        </Button>
      </form>
    )
  }
}
