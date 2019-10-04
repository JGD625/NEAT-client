import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import NeatTallBottle from '../../images/neat_tall_bottle.png'
import NeatArrow2 from '../../images/neat_arrow_2.png'
import ChalkStars from '../../images/neat_chalk_stars.png'
import './LiquorHero.css'

export default class Hero extends Component {
  render() {
  return (
    <section className="Liquor_Hero">
    <ImageTitle title={ "Review Whiskies" } />
    <Link to='/liquors'>
    <img src={NeatTallBottle} alt="barrels of whiskey" className="Hero_IMG"/>
    </Link>
    <div>
    <p className="liquor_p">Read and write reviews about different whiskies from around the world. </p>
    <img src={NeatArrow2} alt="chalk arrow" className="chalk_arrow_2"/>
    </div>
    <div>
    <img src={ChalkStars} alt="chalk arrow" className="chalk_stars"/>
    </div>
    </section>
  );
}
}

const ImageTitle = ({ title }) => (

  <div className="image-title">
    { title } 
  </div>
);