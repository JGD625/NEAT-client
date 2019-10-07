import React, { Component } from 'react'
import MOLECULE from '../../images/neat_molecule.png'
import './Learn.css'

export default class LearnWhiskey extends Component {
  render() {
    return (
   <div>
     <img src={MOLECULE} alt="Chemical makeup of alcohol" className="Molecule_img" />
     <p><span className="bigger">Whiskey</span> (or whisky) is a type of distilled alcoholic beverage made from fermented grain mash. Popular grains, for whiskey making include barley, corn, rye, and wheat, and the grains may be malted depending on the type of whiskey being produced. Whiskey is typically aged in wooden casks, generally made of charred white oak. Casks previously used for production of other spirits, such as rum or sherry, are sometimes used to impart flavor.</p>
     <p>Whisky is a strictly regulated spirit with many classes and types. Just as a square is a rectangle, but a rectangle may not be a square, a bourbon is a whiskey but a whiskey may not be a bourbon. Classification of whiskey is based on the grain type, age, location of production, and barrel. They are produced across the globe, and each class has a unique profile.</p>
     <p>Whiskies do not mature in the bottle, only in the cask, so the age statement of a whiskey is based on the time spent in the barrel. This reflects how much the cask has interacted with the whisky, changing its chemical makeup and taste. While whiskies that have been bottled for many years may have a rarity value, the are not considered higher quality than a more recent whisky that matured in wood for a similar time.</p>
   </div>
    )
  }
}