import React from 'react';
import '../Yelp/SearchBar.css'


const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};





class SearchBar extends React.Component {
//add search bar constructor and set state and add three keys
  constructor(props){
    super(props);
    this.state = {
      term: 'whiskey distillery',
      location: 'NYC',
      sortBy: 'best_match',
      errors: []
     
      
    };
    //these methods use this, so must bind

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }


  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}
      </li>
      );
    });
  }

  //get sort option's class (whether on not it's should be styled as selected**
  getSortByClass(sortByOption) {
    return this.state.sortBy === sortByOption ? 'active' : '';
  }

  //set state of the sorting option*
  handleSortByChange(sortByOption) {
    this.setState({
      sortBy: sortByOption
    });
  }

  //method to handle changes in terms(businesses) / the state of input element should be updated to reflect the text typed into
  handleTermChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  //method to handle changes in location / the state of input element should be updated to reflect the text typed into
  handleLocationChange(event) {
    this.setState({
      location: event.target.value
    });
    
  }

  //functionality for simulate search when you click button
  handleSearch(event) {
    this.props.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy
    );
    event.preventDefault();

  }
  
validate(location) {
    // we are going to store errors for all fields
    // in a signle array
    const errors = [];
  
    if (this.state.location.length === 0) {
      errors.push("We need to know where you are!");
    }
    
  }

  
  render() {
    const { location } = this.state;
    const isEnabled = location.length > 0 && location.match(/^([a-zA-Z0-9]+)$/);
    return (
     
      <div className="SearchBar">
        <div className="SearchBar-fields">
        
          {/* handle term or location change / add onChange attributes */}
         <span><h3>Where are you?</h3> </span> 
         <input type="text" onChange={this.handleLocationChange} value={this.state.location} placeholder="City, State, or Zip Code" required/>
         
         <div className="SearchBar-submit">
         
          {/* add on click attribute to get handleSearch to work */}
          <button onClick={this.handleSearch} disabled={!isEnabled} >Search</button>
        </div>
        </div>
       
      </div>
    )
  }
};
export default SearchBar;
