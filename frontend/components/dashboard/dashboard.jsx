import React from 'react';
import EventListContainer from '../events/event_list_container';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.isDisabled = "true";
    this.state = this.props.currentUser;
    this.renderForm = this.renderForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit() {
    this.props.updateUser(this.state).then(
      res => this.setState({prompt: 'Successfully Updated'}));
  }
  
  renderForm() {
    const user = this.state;
    return (
      <div className='form' onSubmit={this.handleSubmit}>
      <form>
        <input type='text' value={user.email} onChange={this.update('email')}/>
        <input type='text' value={user.name} onChange={this.update('name')}/>
        <select className='dropdown' onChange={this.update('location')}>
          <option value={user.location}>{user.location}</option>
          <option value='SF Bay Area'>San Francisco Bay Area</option>
          <option value='Boston'>Boston</option>
          <option value='New York'>New York</option>
          <option value='Seattle'>Seattle</option>
        </select>
        <input type='textarea' value={user.blurb} onChange={this.update('blurb')} />
        <input type='submit' value='Update' />
      </form>
      {this.state.prompt}
    </div>
  );
  }

  render() {
    const text = this.props.attending.length > 1 ? "Upcoming Meet-Ups" : "No Joined Meet-Ups";
    return (
      <div className='dashboard-wrapper'>
        <section className='list-items' id='dashboard-list'>
          <h1>{text}</h1>
          <EventListContainer events={this.props.attending} dashboard={true}/>
        </section>
        <span className='plus'><p>+<p id='host-new'>Host New</p></p>
        </span>
        {this.renderForm()}
      </div>
    );
  }
}
export default Dashboard;
