import React, { Component } from 'react'
import SCOTCHGLASS from '../../images/neat_scotch_glass.png'
import './Learn.css'


export default class LearnScotch extends Component {
  render() {
    return (
   <div>
     <img src={SCOTCHGLASS} className="Scotch_glass" alt="Scotch Glass" />
     <p><span className="bigger">Scotch</span> Whisky, often simply called Scotch, is malt or grain whiskey produced in Scotland. (In the case of Scotch, whisky is spelled without the e.)</p> 
     <p>Scotch whisky is divided into five distinct categories: single malt Scotch whisky, single grain Scotch whisky, blended malt Scotch whisky (formerly called "vatted malt" or "pure malt"), blended grain Scotch whisky, and blended Scotch whisky. All Scotch whisky must be aged in oak barrels for at least three years, so true Scotch whisky with no age statement is still a minimum of three years.</p>
     <div className="indent">
       <span>The legal definition of a Scotch requires that:</span>
       <ul>
         <li>The whisky was produced at a distillery in Scotland from water and malted barley, to which only whole grains of other cereals may be added, and all of which have been processed into a mash, converted to a fermentable substrate only by endogenous enzyme systems, fermented only by adding yeast, and must be distilled at an alcoholic strength by volume of less than 94.8% (190 US proof)</li>
         <li>Wholly matured in a warehouse in Scotland in oak casks for a minimum of three years.</li>
         <li>Containing no added substances, other than water and plain caramel colouring.</li>
         <li>Comprising a minimum alcoholic strength by volume of 40% (80 US proof).</li>
       </ul>
     </div>
     </div>
    )
  }
}