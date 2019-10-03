import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class LearnBourbon extends Component {
  render() {
   

    return (
      <div>
      <p>Bourbon whiskey is an American whiskey made primarily from corn. Although it may be made anywhere in the United States, bourbon is strongly associated with the South and Kentucky in particular.</p> 
      <p>Bourbon is generally known for a sweeter flavor, derived from the charred oak barrels in which it is aged. The spirit gains its color and much of its flavor from the caramelized sugars and vanillins in the charred wood. There is no minimum age requirement for a whiskey to be labeled as a bournbon.</p>
      <div>
        <span>The legal definition of a Bourbon requires that:</span>
        <ul>
          <li>Produced in the United States</li>
          <li>Made from a grain mixture that is at least 51% corn.</li>
          <li>Aged in new, charred oak containers.</li>
          <li>Distilled to no more than 160 (U.S.) proof (80% alcohol by volume).</li>
          <li>Entered into the container for aging at no more than 125 proof (62.5% alcohol by volume)</li>
          <li>Bottled (like other whiskeys) at 80 proof or more (40% alcohol by volume)</li>
        </ul>
      </div>
      </div>
    )
  }
}

