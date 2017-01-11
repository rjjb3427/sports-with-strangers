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
        <h3>Hi, {this.props.currentUser.first_name} </h3>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }

  componentWillMount() {

  }

  defaultNavBar() {
    return (
      <div className="NavBar">
        <div id='nav-logo' />
        <Link className="link" to='signup'>Sign-Up</Link><br />
        <Link className="link" to='login'>Login</Link>
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
