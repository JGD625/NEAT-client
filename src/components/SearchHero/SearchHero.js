import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import NeatBarrel from '../../images/neat_barrels.png'
import NeatCircle from '../../images/neat_chalk_circle.png'
import './SearchHero.css'

export default class SearchHero extends Component {
    render() {
    return (
      <section className="Search_Hero">
      <Link to='/search'>
      <img src={NeatBarrel} alt="barrels of whiskey" className="Search_Hero_IMG"/>
      <ImageTitle title={ "Find a Distillery" } />
      </Link>
      <p className="search_p">Take a tour. Try a Taste. Learn the craft.</p>
      <img src={NeatCircle} alt="chalk circle" className="Chalk_IMG"/>
      </section>
    );
  }
}

const ImageTitle = ({ title }) => (
  
    <div className="search_image-title">
      { title } 
    </div>
  );