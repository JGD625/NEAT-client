import React, { Component } from 'react'
import Hero from '../../components/hero/Hero'
import SearchHero from '../../components/SearchHero/SearchHero'
import LearnHero from '../../components/LearnHero/LearnHero'
import './Home.css'

export default class Home extends Component {
  
 

  render() {
    return (
      <div className="home_container">
          <Hero />
          <SearchHero />
          <LearnHero />
      </div>
    )
  }
}
