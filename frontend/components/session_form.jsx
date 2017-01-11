import React from 'react';
import { hashHistory} from 'react-router';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderSignIn = this.renderSignIn.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
  }

  componentWillMount() {
    this.loginPage = this.props.route.path === 'login' ? true : false;
  }

  componentWillReceiveProps() {
    this.loginPage = this.props.route.path === 'login' ? true : false;
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.loginPage) {
      this.props.login(this.state);
      hashHistory.push('/');
    } else {
      this.props.signup(this.state);
      hashHistory.push('/');
    }
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  renderLogin() {
    const user = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='First Name' value={user.first_name} onChange={this.update('first_name')}/>
          <input type='password' placeholder='Password' onChange={this.update('password')} />
          <input type='submit' value='Login' />
        </form>
      </div>
    );
  }

  renderSignIn() {
    const user = this.state;
    return (
      <div>
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
