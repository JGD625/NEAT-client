import React, { Component } from 'react'
import BOTTLE from '../../images/neat_tall_bottle.png'
import './Learn.css'

export default class LearnRye extends Component {
  render() {
    return (
   <div>
     <img src={BOTTLE} className="Rye_bottle" alt="Rye bottle" />
     <p><span className="bigger">Rye</span> whisky, often simply called Rye, is either an American Rye Whiskey or Canadian whisky, which is labeled for historical purposes and may not include rye in its production.</p> 
     <p>American Rye has a strong history in the northeastern region of the United States. Though Rye nearly disappeared during the prohibition period, it is currently undergoing a revival. Rye imparts a spicy flavor and is generally less sweet than its American counterpart, bourbon.</p>
     <div className="indent">
       <span>The legal definition of American Rye Whiskey requires that:</span>
       <ul>
         <li>The mash bill was made from at least 51 percent rye.</li>
         <li>It is distilled to no more than 80% abv (160 U.S. proof).</li>
         <li>The whiskey must be aged in new, charred oak barrels.</li>
         <li>The whiskey must be put in the barrels at no more than 62.5% abv (125 proof).</li>
       </ul>
     </div>
     <p>Canadian Whisky is often referred to as "rye whisky" because historically much of the content was from rye. There is no requirement for rye to be used to make Canadian whisky, and the labels "Canadian whisky", "Canadian rye whisky" and "Rye whisky" are all legally permitted, regardless of the actual composition, provided the whiskies have the aroma, taste and character generally attributed to Canadian whisky.</p>
     </div>
    )
  }
}