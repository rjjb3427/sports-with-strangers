import React from 'react';
import EventListContainer from '../events/event_list_container';
import {hashHistory} from 'react-router';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.isDisabled = "true";
    this.state = this.props.currentUser;
    this.renderForm = this.renderForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.footer = this.footer.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  footer() {
    return (
      <footer className='city-footer'>
        <h1>Here's your dashboard. View the time and place of the Game Meet-Ups you're attending.</h1>
        <h1>Host your own events! Click the add button to host a new Meet-Up and view your Host Schedule.</h1>
        <h1>Update your personal information, home city, and description for your host page.</h1>
      </footer>
    );
  }

  componentDidMount() {
    this.setState({
      disabled: true });
  }

  handleSubmit() {
    this.props.updateUser(this.state).then(
      res => this.setState({prompt: 'Successfully Updated'}),
      res => this.setState({prompt: res.responseJSON.map(err => ` ${err}. `)}));
  }

  renderForm() {
    const user = this.state;
    return (
      <div className='form' id='dashboard-form'
          onDoubleClick={() => this.setState({disabled: false, prompt: ''})}>
      <form  onSubmit={this.handleSubmit}>
        <input type='text' disabled={this.state.disabled} value={user.email} onChange={this.update('email')}/>
        <input type='text' disabled={this.state.disabled} value={user.name} onChange={this.update('name')}/>
        <select value={user.location} className='dropdown' disabled={this.state.disabled} onChange={this.update('location')}>
          <option value='SF Bay Area'>San Francisco Bay Area</option>
          <option value='Boston'>Boston</option>
          <option value='New York'>New York</option>
          <option value='Seattle'>Seattle</option>
        </select>
        <textarea disabled={this.state.disabled} value={user.blurb} onChange={this.update('blurb')} />
        <input type='submit' disabled={this.state.disabled} value='Update' />
      </form>
      <p>{this.state.prompt}</p>
    </div>
  );
  }

  render() {
    const text = this.props.attending.length > 0 ? "You Are Attending:" : "No Joined Meet-Ups";
    return (
      <div className='dashboard'>
      <div className='dashboard-wrapper'>
        <section className='list-items' id='dashboard-list'>
          <h1>{text}</h1>
          <EventListContainer events={this.props.attending} dashboard={true}/>
        </section>
        <span className='plus'><span onClick={() => hashHistory.push('/host')}>+<p id='host-new'>Hosting</p></span>
        </span>
        {this.renderForm()}
      </div>
      {this.footer()}
      </div>
    );
  }
}
export default Dashboard;
