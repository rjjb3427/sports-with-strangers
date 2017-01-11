import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.userNavBar = this.userNavBar.bind(this);
    this.defaultNavBar = this.defaultNavBar.bind(this);
  }

  userNavBar() {
    return (
      <div className="NavBar">
        <div id='nav-logo' />
        <div className='nav-links'>
        <h3>Hi, {this.props.currentUser.first_name} </h3>
        <Link onClick={this.props.logout}>Logout</Link>
        </div>
      </div>
    );
  }

  componentWillMount() {

  }

  defaultNavBar() {
    return (
      <div className="NavBar">
        <div id='nav-logo' />
        <div className='nav-links'>
        <Link to='signup'>Sign-Up</Link><br />
        <Link to='login'>Login</Link>
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
