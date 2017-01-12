import React from 'react';
import Modal from 'react-modal';
import SessionFormContainer from './session_form_container';
import {Link} from 'react-router';

const styleSkeleton = {
  content : {
    top : '50%',
    height : "250px",
    left : '50%',
    bottom : 'auto',
    right : 'auto',
    marginRight : '-50%',
    transform : 'translate(-50%, -50%)'
  }
};


class ModalTest extends React.Component {
  constructor() {
    super();

    this.state = { modalIsOpen: false };

    this.openModal = this.openModal.bind(this);
    this.modalDidOpen = this.modalDidOpen.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.alternateText = this.alternateText.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  modalDidOpen() {

  }

  alternateText() {
    if (this.props.formType === 'login') {
      return (
        <p>Don't have an account?
        <Link to='/signup'>Sign Up</Link></p>
      );
    }
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const text = this.props.formType === 'login' ? 'Login' : 'Join Us';
    return (
      <div>
        <Link onClick={this.openModal}>{text}</Link>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.modalDidOpen}
          onRequestClose={this.closeModal}
          style={styleSkeleton}
          contentLabel={text}
        >
        <SessionFormContainer page={this.props.formType}/>
          {this.alternateText()}
        </Modal>
      </div>
    );
  }
}

export default ModalTest;
