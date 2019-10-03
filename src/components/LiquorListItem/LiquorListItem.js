import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { LiquorStarRating } from '../LiquorStarRating/LiquorStarRating'
import StarRatingComponent from 'react-star-rating-component';
import './LiquorListItem.css'

export default class LiquorListItem extends Component {
  render() {
    const { liquor } = this.props

    return (
      <Link to={`/liquors/${liquor.id}`} className='ThingListItem'>
        <div className='ThingListItem__details'>
          <div className='ThingListItem__text'>
            <h2 className='ThingListItem__heading'>{liquor.liquor_name}</h2>
            <div style={{fontSize: 20}}>
            <StarRatingComponent 
              name="rate2" 
              editing={false}
              renderStarIcon={() => <span>$</span>}
              starColor="#8B0000"
              starCount={4}
              value={liquor.price}
              />
              </div>
            <p className='ThingListItem__description'>{truncate(liquor.content)}</p>
          </div>
          
          <div className='ThingListItem__reviews'>
            <LiquorStarRating rating={liquor.average_review_rating} />
            <span id='ThingListItem__review-count'>{readableReviewCount(liquor.number_of_reviews)}</span>
          </div>
        </div>
      </Link>
    )
  }
}

function readableReviewCount(number) {
  switch(number) {
    case 0:
      return 'no reviews yet'

    case 1:
      return `based on 1 review`

    default:
      return `based on ${number} reviews`
  }
}

function truncate(text) {
  const words = text.split(' ')

  if (words.length > 10) {
    return words.slice(0, 10).join(' ') + ' ...'
  }

  return text
}
