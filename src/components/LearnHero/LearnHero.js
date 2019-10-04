import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import NeatGlass from '../../images/neat_glass.png'
import './LearnHero.css'

export default class LearnHero extends Component {
  render() {
  return (
    <section className="Learn_Hero">
    <Link to='/learn'>
    <img src={NeatGlass} alt="barrels of whiskey" className="Learn_Hero_IMG"/>
    <ImageTitle title={ "Learn about Whiskies" } />
    </Link>
    <p className="learn_p">Learn about whiskey classifications and legal guidelines. </p>
    </section>
  );
}
}

const ImageTitle = ({ title }) => (

  <div className="learn_image-title">
    { title } 
  </div>
);