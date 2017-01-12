import React from 'react';
import Modal from 'react-modal';
import SessionFormContainer from './session_form_container';
import {Link} from 'react-router';

const styleSkeleton = {
  content : {
    top : '50%',
    height : "auto",
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
    this.changeForm = this.changeForm.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.alternateText = this.alternateText.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  componentWillMount() {
    Modal.setAppElement('body');
    this.setState({formType: this.props.formType});
  }

  changeForm() {
    if (this.state.formType === 'login') {
    this.setState({formType: 'update'});
  } else {
    this.setState({formType: 'login'});
  }
  }

  alternateText() {
    if (this.state.formType === 'login') {
      return (
        <h4 onClick={this.changeForm}>No Account? Join Us!</h4>
      );
    } else {
      return (
        <h4 onClick={this.changeForm}>Already have an account?</h4>
      );
    }
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const text = this.state.formType === 'login' ? 'Login' : 'Join Us';
    return (
      <div id='modal'>
        <Link onClick={this.openModal}>{text}</Link>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.modalDidOpen}
          onRequestClose={this.closeModal}
          style={styleSkeleton}
          contentLabel={text}
        >
        <SessionFormContainer page={this.state.formType}/>
        {this.alternateText()}
        </Modal>
      </div>
    );
  }
}

export default ModalTest;
