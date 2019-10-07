import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import NeatGlass from '../../images/neat_glass.png'
import NeatArrow1 from '../../images/neat_arrow_1.png'
import './LearnHero.css'

export default class LearnHero extends Component {
  render() {
  return (
    <section className="Learn_Hero">
    <Link to="/learn">
    <div className="Learn_Hero_Left">
    <ImageTitle title={ "Learn about Whiskies" } />
    <img src={NeatArrow1} alt="chalk arrow" className="chalk_arrow"/>
    </div>
    <div className="Learn_Hero_Right">
    <img src={NeatGlass} alt="barrels of whiskey" className="Learn_Hero_IMG"/>
    </div>
    <div className="Learn_text">
    <p className="learn_p">Understand classifications and production. </p>
    </div>
    </Link>
    </section>
  );
}
}

const ImageTitle = ({ title }) => (

  <div className="learn_image-title">
    { title } 
  </div>
);