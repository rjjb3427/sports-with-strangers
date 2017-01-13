import React from 'react';
import { hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { first_name: '', last_name: '', location: '', image: '', blurb: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderSignUp = this.renderSignUp.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.errors = this.errors.bind(this);
  }

  componentWillMount() {
    this.loginPage = this.props.page === 'login' ? true : false;
  }

  componentWillReceiveProps(newProps) {
    const demoUser = {first_name: 'Demo', password: 'guestpassword'};
    newProps.demoLogin ? this.props.login(demoUser) : null;
    this.loginPage = newProps.page === 'login' ? true : false;
    if (this.props.errors[0]) {
      this.props.clearErrors();
    }
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.loginPage) {
      this.props.login(this.state);
    } else {
      this.props.signup(this.state);
    }
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  errors() {
    if (this.props.errors){
    return (
      <span className='errors'>{this.props.errors.map(
          (err, idx) => <li key={idx}>{err}</li>)}
      </span>
    );}
  }

  renderLogin() {
    const user = this.state;
    return (
      <div className='form-wrapper'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='First Name' value={user.first_name} onChange={this.update('first_name')}/>
          <input type='password' placeholder='Password' onChange={this.update('password')} /><br />
          <input type='submit' value='Login' />
        </form><br />
        <span>{this.errors()}</span>
      </div>
    );
  }

  renderSignUp() {
    const user = this.state;
    return (
      <div className='form-wrapper'>
        <form onSubmit={this.handleSubmit} >
          <input type='text' placeholder='First Name' value={user.first_name} onChange={this.update('first_name')}/>
          <input type='text' placeholder='Last Name (Optional)' value={user.last_name} onChange={this.update('last_name')}/>
          <select className='dropdown' onChange={this.update('location')}>
            <option>Choose A City</option>
            <option value='SF Bay Area'>San Francisco Bay Area</option>
            <option value='Boston'>Los Angeles</option>
            <option value='New York'>New York</option>
            <option value='Seattle'>Seattle</option>
          </select>
          <input type='password' placeholder='Password' onChange={this.update('password')} /><br />
          <input type='submit' value='Sign Up' />
        </form><br />
      <span>{this.errors()}</span>
      </div>
    );
  }

  render() {
    if (this.loginPage) {
      return this.renderLogin();
    } else {
      return this.renderSignUp();
    }
  }
}

export default SessionForm;
