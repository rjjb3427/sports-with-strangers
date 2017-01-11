import React from 'react';
import { hashHistory} from 'react-router';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { first_name: '', last_name: '', location: '', image: '', blurb: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderSignIn = this.renderSignIn.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.errors = this.errors.bind(this);
  }

  componentWillMount() {
    if (this.props.loggedIn) {
      hashHistory.push('/');
    }
    this.loginPage = this.props.route.path === 'login' ? true : false;
  }

  componentWillReceiveProps() {
    console.log(this.props);
    this.loginPage = this.props.route.path === 'login' ? true : false;
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
          <input type='password' placeholder='Password' onChange={this.update('password')} />
          <input type='submit' value='Login' />
        </form>
        {this.errors()}
      </div>
    );
  }

  renderSignIn() {
    const user = this.state;
    return (
      <div className='form-wrapper'>
        <form onSubmit={this.handleSubmit} >
          <input type='text' placeholder='First Name' value={user.first_name} onChange={this.update('first_name')}/>
          <input type='text' placeholder='Last Name (Optional)' value={user.last_name} onChange={this.update('last_name')}/>
          <select onChange={this.update('location')}>
            <option>Choose A City</option>
            <option value='San Francisco'>San Francisco Bay Area</option>
            <option value='Los Angeles'>Los Angeles</option>
            <option value='New York'>New York</option>
            <option value='Seattle'>Seattle</option>
          </select>
          <input type='password' placeholder='Password' onChange={this.update('password')} />
          <input type='submit' value='Sign Up' />
        </form>
        {this.errors()}
      </div>
    );
  }

  render() {
    if (this.loginPage) {
      return this.renderLogin();
    } else {
      return this.renderSignIn();
    }
  }
}

export default SessionForm;
