import React from 'react';
import Modal from 'react-modal';
import SessionFormContainer from './session_form_container';
const modalStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class ModalTest extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.modalDidOpen = this.modalDidOpen.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  modalDidOpen() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.modalDidOpen}
          onRequestClose={this.closeModal}
          style={modalStyle}
          contentLabel="Example Modal"
        >
        <SessionFormContainer />
        </Modal>
      </div>
    );
  }
}

export default ModalTest;
