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
    if (this.props.currentUser.location) {
      return (<Link>{this.props.currentUser.location}</Link>);
    } else {
      return (<Link to='/cities'>Cities</Link>);
    }
  }

  userNavBar() {
    console.log(this.props);
    return (
      <div className="NavBar">
        <div id='nav-logo' />
        <div className='nav-links'>
        <a>{this.cityLink()}</a>
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
