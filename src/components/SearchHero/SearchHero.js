import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import NeatBarrel from '../../images/neat_barrels.png'
import './SearchHero.css'

export default class SearchHero extends Component {
    render() {
    return (
      <section className="Search_Hero">
      <Link to='/search'>
      <img src={NeatBarrel} alt="barrels of whiskey" className="Search_Hero_IMG"/>
      <ImageTitle title={ "Find a Distillery" } />
      </Link>
      <p className="search_p">Find a distillery to tour. </p>
      </section>
    );
  }
}

const ImageTitle = ({ title }) => (
  
    <div className="search_image-title">
      { title } 
    </div>
  );