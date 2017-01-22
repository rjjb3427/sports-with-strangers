import React from 'react';
import moment from 'moment';
import {Link, hashHistory} from 'react-router';
import EventListContainer from '../events/event_list_container';

class HostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      sport: '',
      time: '',
      address: '',
      capacity: '',
      host_id: this.props.currentUser.id,
      city_id: this.props.currentUser.city.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchNewEvents = this.fetchNewEvents.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id).then(res => {
      this.setState({hosting: res.hosting});
    }, () => hashHistory.goBack());
  }

  fetchNewEvents() {
    this.props.fetchUser(this.props.currentUser.id).then(res => {
      this.setState({
            hosting: res.hosting,
            title: '',
            sport: '',
            time: '',
            address: '',
            capacity: '', });
    }, (res) => this.setState({prompt: res.responseJSON}));
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({host_id: this.props.currentUser.id,
      city_id: this.props.currentUser.city.id}, () => {
        this.props.createEvent(this.state).then(
        this.fetchNewEvents,
        res => this.setState({prompt: res.responseJSON.map(err => ` ${err}. `)}));
      });
  }

  renderEvents() {
    if (this.state.hosting) {
      return (
        <section className='list-items'>
          <EventListContainer events={this.state.hosting} host={this.props.currentUser} />
        </section>
      );
    }
  }

  render() {
    const currentUserId = this.props.currentUser.id;
    let text;
    if (this.state.hosting && this.state.hosting.length > 0) {
      text = `You're hosting ${this.state.hosting.length} so far.`;
    } else {
      text = "Join Our Community of Hosts and Meet New Fans";
    }
    return (
    <div className='hosting'>
      <form onSubmit={this.handleSubmit} className='form' id='host-form'>
        <h1>{text}</h1>
        <Link to={`/users/${currentUserId}`}>View My Host Profile</Link>
        <input type='text' placeholder='Meet-Up Name' value={this.state.title}
                             onChange={this.update('title')}/>
                           <input type='text' placeholder='Address of Venue'
          value={this.state.address}
          onChange={this.update('address')}/>
        <select className='dropdown' onChange={this.update('sport')} value={this.state.sport}>
          <option value='' disabled>What Are You Watching?</option>
          <option value='Basketball'>Basketball</option>
          <option value='Football'>Football</option>
          <option value='Baseball'>Baseball</option>
          <option value='Soccer'>Soccer</option>
          <option value='Other'>Other</option>
        </select>

        <input type='number' placeholder='How Many Can Attend?'
          onChange={this.update('capacity')} value={this.state.capacity}/><br />
        Please Provide Date and Time <br/>
        <input type="datetime-local" value={this.state.time} onChange={this.update('time')}/>
        <input type='submit' value='Confirm Meet-Up' className='button' /><br />
        <p>{this.state.prompt}</p>
      </form>
        {this.renderEvents()}
  </div>  );
  }
}

export default HostForm;
