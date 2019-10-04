import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import NeatTallBottle from '../../images/neat_tall_bottle.png'
import './LiquorHero.css'

export default class Hero extends Component {
  render() {
  return (
    <section className="Liquor_Hero">
    <ImageTitle title={ "Review Whiskies" } />
    <Link to='/liquors'>
    <img src={NeatTallBottle} alt="barrels of whiskey" className="Hero_IMG"/>
    </Link>
    <p className="liquor_p">Read and write reviews about different whiskies from around the world. </p>
    </section>
  );
}
}

const ImageTitle = ({ title }) => (

  <div className="image-title">
    { title } 
  </div>
);