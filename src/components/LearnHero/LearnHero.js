import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import CarouselOne from '../../images/CarouselOne.png'
import './LearnHero.css'

export default class LearnHero extends Component {
  render() {
  return (
    <section className="Learn_Hero">
    <Link to='/learn'>
    <img src={CarouselOne} alt="barrels of whiskey" className="Learn_Hero_IMG"/>
    <ImageTitle title={ "Learn about Whiskies" } />
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