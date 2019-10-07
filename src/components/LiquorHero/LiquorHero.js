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
    <Link to="/liquors">
    <div className="Liquor_Hero_Left">
    <ImageTitle title={ "Review Whiskies" } />
    <img src={NeatArrow2} alt="chalk arrow" className="chalk_arrow_2"/>
    </div>
    <div className="Liquor_Hero_Right">
    <img src={NeatTallBottle} alt="bottle of whiskey" className="Hero_IMG"/>
    <img src={ChalkStars} alt="chalk stars" className="chalk_stars"/>
    </div>
    <div className="Liquor_hero_text">
    <p className="liquor_p">Read and write reviews about different whiskies from around the world. </p>
    </div>
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