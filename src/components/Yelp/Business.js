import React from 'react';
import NeatScotchGlass from '../../images/neat_scotch_glass.png'
import './Business.css'


class Business extends React.Component {
 
  render() {
    return (
      <div className="Business">
        <div className="image-container">
        <a href={this.props.business.url} target="_blank" rel="noopener noreferrer">
          {/* accessed information via the business prop set in businesslist.js */}
          <img src={NeatScotchGlass} className="Search_Image" alt="whiskey glass"/></a>
        </div>
        <div className="Business-information">
        <h2>{this.props.business.name}</h2>
          <div className="Business-address">
            <p>{this.props.business.phone}</p>
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}, {`${this.props.business.state} ${this.props.business.zipCode}`}</p>
          </div>
        </div>
      </div>
    );
  }
};
  
  export default Business;
  