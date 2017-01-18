import React from 'react';
import { Link, hashHistory } from 'react-router';
import ModalTest from './forms/modal';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.userNavBar = this.userNavBar.bind(this);
    this.defaultNavBar = this.defaultNavBar.bind(this);
    this.cityLink = this.cityLink.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout().then(hashHistory.push('/'));
  }

  cityLink() {
    const homeCity = this.props.currentUser.city;
    if (homeCity) {
      return (
        <Link to={`/cities/${homeCity.id}`}>{homeCity.name}</Link> );
    }
  }

  userNavBar() {
    const userId = this.props.currentUser.id;
    return (
      <div className="NavBar">
        <div id='nav-logo' />
        <div className='nav-links'>
        <Link to={'host'}>Hosting</Link>
        <Link to={`dashboard`}>Dashboard</Link>
        {this.cityLink()}
        <Link to='/cities'>Cities</Link>
        <Link onClick={this.handleLogout}>Logout</Link>
        </div>
      </div>
    );
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
