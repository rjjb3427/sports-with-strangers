import React from 'react';
import Modal from 'react-modal';
import SessionFormContainer from './session_form_container';
import {Link} from 'react-router';

const modalStyle = {
  content : {
    top : '50%',
    height : "auto",
    left : '50%',
    bottom : 'auto',
    right : 'auto',
    marginRight : '-50%',
    transform : 'translate(-50%, -50%)',
    padding : '10px'
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
    this.loginDemo = this.loginDemo.bind(this);
  }

  openModal() {
    if (this.state.modalIsOpen != true){
      this.setState({modalIsOpen: true});
    }
  }

  componentWillMount() {
    Modal.setAppElement('body');
    let text;
    if (!this.props.text) {
      text = this.props.formType === 'login' ? 'Login' : 'Get Started';
    } else {
      text = this.props.text;
    }
    this.setState({formType: this.props.formType, text});
  }

  changeForm() {
      if (this.state.formType === 'login') {
      this.setState({formType: 'update'});
    } else {
      this.setState({formType: 'login'});
    }
  }

  loginDemo() {
    this.setState({demo: 'yes'});
  }

  alternateText() {
    if (this.state.formType === 'login') {
      return (
        <span className='modal-footer'>
        <h4 onClick={this.changeForm}>No Account? Join Us!</h4>
        <h4 onClick={this.loginDemo}>Log In With Demo</h4>
        </span>
      );
    } else {
      return (
        <span className='modal-footer'>
        <h4 onClick={this.changeForm}>Already have an account?</h4>
        <h4 onClick={this.loginDemo}>Log In With Demo</h4>
        </span>
      );
    }
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className='modal'>
        <Link onClick={this.openModal}>{this.state.text}</Link>
        <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.modalDidOpen}
          onRequestClose={this.closeModal}
          style={modalStyle}
          contentLabel={this.state.text} >
        <SessionFormContainer page={this.state.formType} demoLogin={this.state.demo}/>
        {this.alternateText()}
        </Modal>
      </div>
    );
  }
}

export default ModalTest;
