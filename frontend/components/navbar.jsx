import React from 'react';
import { Link } from 'react-router';
import ModalTest from './modal';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.userNavBar = this.userNavBar.bind(this);
    this.defaultNavBar = this.defaultNavBar.bind(this);
    this.cityLink = this.cityLink.bind(this);
  }

  cityLink() {
    const homeCity = this.props.currentUser.city;
    if (homeCity) {
      return (
        <Link to={`/cities/${homeCity.id}`}>{homeCity.name}</Link> );
    }
  }

  userNavBar() {
    return (
      <div className="NavBar">
        <div id='nav-logo' />
        <div className='nav-links'>
        {this.cityLink()}
        <Link to='/cities'>Cities</Link>
        <Link onClick={this.props.logout}>Logout</Link>
        </div>
      </div>
    );
  }

  componentWillReceiveProps() {

  }

  defaultNavBar() {
    return (
      <div className="NavBar">
        <div id='nav-logo' />
        <div className='nav-links'>
        <ModalTest formType='signup' /><br />
        <ModalTest formType='login'/>
        </div>
      </div>
    );
  }
  render() {
    if (this.props.currentUser) {
      return this.userNavBar();
    } else {
      return this.defaultNavBar();
    }
  }
}


export default NavBar;
