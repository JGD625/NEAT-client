import React from 'react';
import './Business.css'


class Business extends React.Component {
 
  render() {
    return (
      <div className="Business">
        <div className="image-container">
        <a href={this.props.business.url} target="_blank">
          {/* accessed information via the business prop set in businesslist.js */}
          <img src={this.props.business.imageSrc} className="Search_Image"/></a>
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{this.props.business.phone}</p>
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}</p>
            <p>{`${this.props.business.state} ${this.props.business.zipCode}`}</p>
          </div>
        </div>
      </div>
    );
  }
};
  
  export default Business;
  