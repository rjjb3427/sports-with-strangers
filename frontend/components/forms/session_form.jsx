import React from 'react';
import { hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { email: '',
       name: '',
       location: '',
       image: '',
       blurb: '',
       password: ''
      };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderSignUp = this.renderSignUp.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.errors = this.errors.bind(this);
  }

  componentWillMount() {
    this.loginPage = this.props.page === 'login' ? true : false;
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(newProps) {
    const demoUser = {email: 'demo@demo.com', password: 'guestpassword'};
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
    if (Array.isArray(this.props.errors)){
    return (
      <span className='errors'>{this.props.errors.map(
          (err, idx) => <li key={idx}>{err}</li>)}
      </span>
    );}
  }

  renderLogin() {
    const user = this.state;
    return (
      <div className='form'>
        <form onSubmit={this.handleSubmit}>
          <input type='text'
            placeholder='Email Address'
            value={user.email}
            onChange={this.update('email')}/>
          <input type='password'
            placeholder='Password'
            value={user.password}
            onChange={this.update('password')} /><br />
          <input type='submit' value='Login' />
        </form><br />
        <span>{this.errors()}</span>
      </div>
    );
  }

  renderSignUp() {
    const user = this.state;
    return (
      <div className='form'>
        <form onSubmit={this.handleSubmit} >
          <input type='text' placeholder='Email Address' value={user.email} onChange={this.update('email')}/>
          <input type='text' placeholder='Name (Required for Hosts)' value={user.name} onChange={this.update('name')}/>
          <select className='dropdown' onChange={this.update('location')}>
            <option>Choose A City</option>
            <option value='SF Bay Area'>San Francisco Bay Area</option>
            <option value='Boston'>Boston</option>
            <option value='New York'>New York</option>
            <option value='Seattle'>Seattle</option>
          </select>
          <input type='password'
                placeholder='Password'
                value={user.password}
                onChange={this.update('password')} /><br />
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
