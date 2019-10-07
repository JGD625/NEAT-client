import React, { Component } from 'react'
import LiquorHero from '../../components/LiquorHero/LiquorHero'
import SearchHero from '../../components/SearchHero/SearchHero'
import LearnHero from '../../components/LearnHero/LearnHero'
import NeatHero from '../../images/neat_hero.png'
import './Home.css'

export default class Home extends Component {
  
 

  render() {
    return (
      <div className="home_container">
        <img src={NeatHero} alt="whiskey best served neat" className="main_hero_img"/>
        <h2 className="hero_slogan">Neat is here to help you find the perfect glass of whiskey.</h2>
        <LiquorHero />
        <SearchHero />
        <LearnHero />
      </div>
    )
  }
}
