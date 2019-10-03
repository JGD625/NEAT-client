import React, {Component} from 'react';
import './YelpPage.css'
import SearchBar from '../../components/Yelp/SearchBar'
import BusinessList from '../../components/Yelp/BusinessList'
import Yelp from '../../components/Yelp/Helpers'



class YelpSearch extends Component {

    constructor(props){
      super(props);
      this.state = {
        businesses:[]
      };
      this.searchYelp = this.searchYelp.bind(this);
    }
    
    componentDidMount(){
      window.scrollTo(0, 0);
    }

    // search functionality with paramaters to send to API & simulate search console.log
      searchYelp(term, location, sortBy) {
        Yelp.search(term, location, sortBy).then(businesses => {
          this.setState({
            businesses: businesses
          })
        });
      };
    
      render() {
        return (
          <div className="YelpSearch">
            {/* add searchYelp property in Searchbar */}
              <SearchBar searchYelp={this.searchYelp}/>
              {/* set buinesslist prop: add business property set to the business array */}
              <BusinessList businesses={this.state.businesses} />
          </div>
        );
      }
    }
    
    export default YelpSearch;
    