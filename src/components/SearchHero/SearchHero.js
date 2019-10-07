import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import NeatBarrel from '../../images/neat_barrels.png'
import NeatCircle from '../../images/neat_chalk_circle.png'
import './SearchHero.css'

export default class SearchHero extends Component {
    render() {
    return (
      <section className="Search_Hero">
      <Link to="/search">
      <div className="Search_Hero_left">
      <img src={NeatBarrel} alt="barrels of whiskey" className="Search_Hero_IMG"/>
      <img src={NeatCircle} alt="chalk circle" className="Chalk_IMG"/>
      
      </div>
      <div className="Search_Hero_right">
      <ImageTitle title={ "Find A Distillery" } />
      </div>
      <div className="Search_hero_text">
      <p className="search_p">Take a tour. Try a Taste. Learn the craft.</p>
      </div>
      </Link>
      </section>
    );
  }
}

const ImageTitle = ({ title }) => (
  
    <div className="search_image-title">
      { title } 
    </div>
  );