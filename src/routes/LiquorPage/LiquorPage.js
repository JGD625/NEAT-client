import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LiquorContext from '../../contexts/LiquorContext'
import LiquorApiService from '../../services/liquor-api-service'
import { Hyph, Section } from '../../components/Utils/Utils'
import { LiquorStarRating } from '../../components/LiquorStarRating/LiquorStarRating'
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import StarRatingComponent from 'react-star-rating-component';
import './LiquorPage.css'

export default class LiquorPage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = LiquorContext

  componentDidMount() {
    const { liquorId } = this.props.match.params
    this.context.clearError()
    LiquorApiService.getLiquor(liquorId)
      .then(this.context.setLiquor)
      .catch(this.context.setError)
    LiquorApiService.getLiquorReviews(liquorId)
      .then(this.context.setReviews)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearLiquor()
  }

  renderLiquor() {
    const { liquor, reviews } = this.context
    return <>
      <div className='ThingPage__image'/>
      <h2 className="red">{liquor.liquor_name}</h2>
      <LiquorContent liquor={liquor} />
      <LiquorReviews reviews={reviews} />
      <ReviewForm />
    </>
  }

  render() {
    const { error, liquor } = this.context
    let content
    if (error) {
      content = (error.error === `Liquor doesn't exist`)
        ? <p className='red'>Liquor not found</p>
        : <p className='red'>There was an error</p>
    } else if (!liquor.id) {
      content = <div className='loading' />
    } else {
      content = this.renderLiquor()
    }
    return (
      <Section className='ThingPage'>
        {content}
      </Section>
    )
  }
}

function LiquorContent({ liquor }) {
  return (
    <div>
      <div className="Liquor_details">
      <h3>Proof: {liquor.proof}</h3>
      <h3>Price: <StarRatingComponent 
              name="rate2" 
              editing={false}
              renderStarIcon={() => <span>$</span>}
              starColor="#8B0000"
              starCount={4}
              value={liquor.price}
              /></h3>
      <h3>Origin: {liquor.origin}</h3>
      <h3>Producer: {liquor.brand_name}</h3>
      <h3>Producer: {liquor.producer}</h3>
      <h3>Type: {liquor.liquor_type}</h3>

              </div>
    <p className='ThingPage__content'>
      {liquor.content}
    </p>
    </div>
  )
}

function LiquorReviews({ reviews = [] }) {
  return (
    <ul className='ThingPage__review-list'>
      {reviews.map(review =>
        <li key={review.id} className='ThingPage__review'>
          <p className='ThingPage__review-text'>
            <FontAwesomeIcon
              size='lg'
              icon='quote-left'
              className='ThingPage__review-icon red'
            />
            {review.text}
          </p>
          <p className='ThingPage__review-user'>
            <LiquorStarRating rating={review.rating} />
            <Hyph />
            {review.user.full_name}
          </p>
        </li>
      )}
    </ul>
  )
}
