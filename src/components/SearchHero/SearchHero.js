import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import SEARCHHERO from '../../images/searchhero.png'
import './SearchHero.css'

export default class SearchHero extends Component {
    render() {
    return (
      <section className="Search_Hero">
      <Link to='/search'>
      <img src={SEARCHHERO} alt="barrels of whiskey" className="Search_Hero_IMG"/>
      <ImageTitle title={ "Find a Distillery" } />
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