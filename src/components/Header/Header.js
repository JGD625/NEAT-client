import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import NEATLOGO from '../../images/NEATLOGO.png'
import SIGNUPICON from '../../images/neat_icon_signup.png'
import LOGINICON from '../../images/neat_icon_login.png'
import LOGOUTICON from '../../images/neat_icon_logout.png'
import BOTTLEICON from '../../images/neat_icon_bottle.png'
import LOCATIONICON from '../../images/neat_icon_location.png'
import LEARNICON from '../../images/neat_icon_learn.png'
import './Header.css'

export default class Header extends Component {
  

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  renderLogoutLink() {
    return (
      <section>
      <div className='Header__logged-in'>
      <Link to="/">
      <img src={NEATLOGO} alt="review whiskies" className="main_logo" />
      </Link>
       <Link
          to='/search'>
          Distillery Search
        </Link> 
        <Link
          to='/learn'>
          Learn about Whisky
        </Link>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>

       <div className='Mobile_Header__logged-in'>
       <div className="Block_Link">
       
       <Link to="/">
      <img src={NEATLOGO} alt="review whiskies" className="Mobile_icon" />
      </Link>
        </div>
       <div className="Block_Link">
       <Link
          to='/liquors'>
          <img src={BOTTLEICON} alt="review whiskies" className="Mobile_icon" />
        </Link> 
        </div>

        <div className="Block_Link">
       <Link
          to='/search'>
          <img src={LOCATIONICON} alt="locate distilleries" className="Mobile_icon" />
        </Link>
        </div>

        <div className="Block_Link">
        <Link
          to='/learn'>
          <img src={LEARNICON} alt="learn about whiskey" className="Mobile_icon" />
        </Link>
        </div>

        <div className="Block_Link">
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          <img src={LOGOUTICON} alt="log out" className="Mobile_icon" />
        </Link>
        </div>

      </div>
      </section>
    )
  }

  renderLoginLink() {
    return (
      <section>
        <div className='Header__not-logged-in'>
        <Link to="/">
      <img src={NEATLOGO} alt="review whiskies" className="main_logo" />
      </Link>
          <Link
            to='/login'>
            Log in
          </Link>
          <Link
           to='/register'>
           Register
          </Link>
        </div>

       <div className='Mobile_Header__not-logged-in'>

       <div className="Block_Link">
       
       <Link to="/">
      <img src={NEATLOGO} alt="review whiskies" className="Mobile_icon" />
      </Link>
        </div>
        <div className="Block_Link">
       
        <Link
          to='/login'>
          <img src={LOGINICON} alt="log in" className="Mobile_icon" />
        </Link>
        </div>

        <div className="Block_Link">
        <Link
          to='/register'>
          <img src={SIGNUPICON} alt="sign up" className="Mobile_icon" />
        </Link>
        </div>

      </div>

     </section>
    )
  }

  renderLogo() {
    return (
      <div className='Neat_Header_logo'>
       <img src={NEATLOGO} alt="Neat Whiskey Glass Logo" className="main_logo" />
      </div>
    )
  }

  render() {
    return <>
      <nav className='Header'>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>

    </>
  }
}

