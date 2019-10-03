import React, { Component } from 'react'
import LearnBourbon from '../../components/Learn/LearnBourbon'
import LearnRye from '../../components/Learn/LearnRye'
import LearnScotch from '../../components/Learn/LearnScotch'
import LearnWhiskey from '../../components/Learn/LearnWhiskey'
import './LearnPage.css'



export default class LearnPage extends Component {
  
 

  render() {
    return (
      <div className="Learn_Page_Container">
       <LearnWhiskey />
       <LearnBourbon />
       <LearnRye />
       <LearnScotch />
      </div>
    )
  }
}
