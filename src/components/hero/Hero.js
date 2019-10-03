import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import CarouselThree from '../../images/CarouselThree.png'
import './Hero.css'

export default class Hero extends Component {
  render() {
  return (
    <section className="Hero">
    <Link to='/liquors'>
    <img src={CarouselThree} alt="barrels of whiskey" className="Hero_IMG"/>
    <ImageTitle title={ "Review Whiskies" } />
    </Link>
    </section>
  );
}
}

const ImageTitle = ({ title }) => (

  <div className="image-title">
    { title } 
  </div>
);